import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import './NewPostModal.css'
import { createPost } from '../../store/post';

const NewPostModal = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [isClosed, setIsClosed] = useState(true)

    const updateName = (e) => setName(e.target.value)
    const updateDescription = (e) => setDescription(e.target.value)
    const updatedImage = (e) => setImage(e.target.value)

    const handleSubmit=async (e)=>{
        e.preventDefault();

        const payload={
            name,
            description,
            image,

        }

        const added=await dispatch(createPost(payload))
        if(added) {
            history.push(`/`)
        }


    }

    const onClick = (e) => {
        e.preventDefault();
        setIsClosed(false)
    }


    return (
        <div className='modal-wrapper'>
             <div className='form-page-container'>
           <h2>New Post</h2>
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
           <button className='post-cancel-button' onClick={onClick}>Cancel</button>
       </form>
       </div>
        </div>
    )
}

export default NewPostModal
