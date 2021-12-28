import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import './NewPostForm.css'
import { createPost } from '../../store/post';
import { useSelector } from 'react-redux';



export default function NewPostForm({setShowModal}) {
    const dispatch = useDispatch()
    const history = useHistory();
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState("")
    const user = useSelector(state => state.session.user)
    const userId = user.id
    const [errors, setErrors] = useState([]);

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
            userId
        }

        let errors = [];

        if(!name) errors.push('Please enter a name for the post.');
        if(!description) errors.push('Please provide a description for the post.')
        if(description.length > 400) errors.push('Playlist name must be less than 400 characters.')
        if(description.length < 5) errors.push('Please provide a longer description.')
        if (errors.length > 0) {
          setErrors(errors);
          return null;
          } else {
            setErrors([])
            const added=await dispatch(createPost(payload))
            if(added) {
              history.push(`/`)
              setShowModal(false)
            }
          }
    }

    const handleCancel= async (e) => {
      e.preventDefault();
      setShowModal(false)
    }


   return (
    <div className='modal-wrapper'>
    <div className='form-page-container'>
  <h2>New Post</h2>
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
  <label>
  <input className='post-form-input'
  accept='image/*'
  name='file'
  type="file"
  onChange={updateFile}/>
  </label>
  <div className='new-post-buttons-container'>
  <button className='new-post-submit-button'type='submit'>Submit</button>
  <button className='new-post-cancel-button' onClick={handleCancel}>Cancel</button>
  </div>
</form>
</div>
</div>
   )
}
