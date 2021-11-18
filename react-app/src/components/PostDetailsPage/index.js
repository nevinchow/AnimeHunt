import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { createPost } from '../../store/post';
import { useSelector } from 'react-redux';
import './PostDetailsPage.css'
import { getCommentsByPostId } from '../../store/comment';


function PostDetailsPage ({setShowModal, post}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const postId = post.id
    const comments = useSelector(state => Object.values(state.commentReducer))
    const postComments = comments.filter((comment) => comment.postId === postId)
    console.log(postComments)
    const [comment, setComment] = useState('')
    const updateComment = (e) => setComment(e.target.value)
    const handleCancel= (e) => {
        e.preventDefault();
        setShowModal(false)
      }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const payload = {
            postId,
            comment
        }

        const added = await dispatch(createPost(payload))
        if (added) {
            history.push(`/`)
        }
    }

    useEffect(() => {
        dispatch(getCommentsByPostId(postId))
    }, [dispatch])

    return (

        <div className='modal-wrapper'>
            <div className='post-title-cancel-button'>
            <h2>{post.name}</h2>
            <button className='post-details-close'onClick={handleCancel}>X</button>
            </div>
            <img className='post-detail-image'src={post.image}></img>
            <p>{post.description}</p>
            <h3>Discussion</h3>
            <form onSubmit={handleSubmit}>
                <input
                placeholder='Leave a comment'
                value={comment}
                onChange={updateComment}/>
                <button type='submit'>Submit</button>
            </form>
            {postComments.map((postComment) => (
                <p>{postComment.description}</p>
            ))}
        </div>

    )
}

export default PostDetailsPage
