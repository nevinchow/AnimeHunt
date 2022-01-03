import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { editPost } from '../../store/post';
import './EditPostForm.css'


export default function EditPostForm({setShowEditPostModal, post}) {
    const dispatch = useDispatch()
    const history = useHistory();
    const [name, setName] = useState(post.name)
    const [description, setDescription] = useState(post.description)
    const [file, setFile] = useState("")
    const postId = post.id
    const [errors, setErrors] = useState([]);
    const user = useSelector(state => state.session.user)
    const userId = user.id
    const updateName = (e) => setName(e.target.value)
    const updateDescription = (e) => setDescription(e.target.value)
    const updateFile = (e) => {
      const file = e.target.files[0];
      if (file) setFile(file);
    };
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const payload={
            name,
            description,
            file,
            postId,
            userId
        }

        let errors = [];
        if(!name) errors.push('Please enter a name for the post.');
        if(!description) errors.push('Please provide a description for the post.')
        if(description.length > 400) errors.push('Playlist name must be less than 400 characters.')


        if (errors.length > 0) {
          setErrors(errors);
          return null;
          } else {
            setErrors([])
            const added=await dispatch(editPost(payload))
            if(added) {
              history.push(`/`)
              setShowEditPostModal(false)
            }
          }


    }

    const handleCancel= async (e) => {
      e.preventDefault();
      setShowEditPostModal(false)
    }


   return (
    <div className='modal-wrapper-edit'>
    <div className='form-page-container'>
  <h2>Edit Post</h2>
  {errors.length > 0 && (
        <div className="errors">
            <p className="error-title"> The following errors were found: </p>
            <ul className="error-list">
                {errors.map(error => <li className="error" key={error}>{error}</li>)}
            </ul>
        </div>
        )}
<form className='form-container' onSubmit={handleSubmit} >
  <input className='post-form-input'
  placeholder='Title'
  value={name}
  onChange={updateName}
  required />
  <input className='post-form-description'
  placeholder='Description'
  value={description}
  onChange={updateDescription}/>
  <input className='post-form-input'
  name='file'
  type='file'
  onChange={updateFile}/>
  <div className='edit-post-buttons2'>
  <button className='edit-post-submit-button'type='submit'>Submit</button>
  <button className='edit-post-cancel-button' onClick={handleCancel}>Cancel</button>
  </div>
</form>
</div>
</div>
   )
}
