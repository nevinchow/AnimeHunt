import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { editPost } from '../../store/post';



export default function EditPostForm({setShowModal, post}) {
    const dispatch = useDispatch()
    const history = useHistory();
    const [name, setName] = useState(post.name)
    const [description, setDescription] = useState(post.description)
    const [image, setImage] = useState(post.image)
    const postId = post.id


    const updateName = (e) => setName(e.target.value)
    const updateDescription = (e) => setDescription(e.target.value)
    const updatedImage = (e) => setImage(e.target.value)

    const handleSubmit=async (e)=>{
        e.preventDefault();
        setShowModal(false)
        const payload={
            name,
            description,
            image,
            postId
        }
        console.log(payload)
        const added=await dispatch(editPost(payload))
        if(added) {
            history.push(`/`)
        }


    }

    const handleCancel= async (e) => {
      e.preventDefault();
      setShowModal(false)
    }


   return (
    <div className='modal-wrapper'>
    <div className='form-page-container'>
  <h2>Edit Post</h2>
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
  placeholder='Image URL'
  value={image}
  onChange={updatedImage}/>
  <button className='post-submit-button'type='submit'>Submit</button>
  <button className='post-cancel-button' onClick={handleCancel}>Cancel</button>
</form>
</div>
</div>
   )
}
