import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { createPost } from '../../store/post';
import { useSelector } from 'react-redux';
import './PostDetailsPage.css'
import { getCommentsByPostId } from '../../store/comment';
import { createComment } from '../../store/comment';
import { getUsers } from '../../store/user';

function PostDetailsPage ({setShowModal, post}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const postId = post?.id
    const comments = useSelector(state => Object.values(state.commentReducer))
    const postComments = comments.filter((comment) => comment.postId === postId)
    const user = useSelector(state => state.session.user)
    const userId = user?.id
    const username = user.username
    console.log(username)
    const [description, setDescription] = useState('')
    const updateComment = (e) => setDescription(e.target.value)
    const handleCancel= (e) => {
        e.preventDefault();
        setShowModal(false)
      }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const payload = {
            userId,
            postId,
            description,
            username
        }

        const added = await dispatch(createComment(payload))
        if (added) {
            history.push(`/`)
        }
    }

    useEffect(() => {
        dispatch(getCommentsByPostId(postId),
        dispatch(getUsers()))
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
                <input className='comment-input'
                placeholder='Leave a comment'
                value={description}
                onChange={updateComment}/>
                <button type='submit'>Submit</button>
            </form>
            {postComments.map((postComment) => (
                <>
                <div className='username-comment'>
                    <p className='username-tag'>{postComment.username}</p>
                    <p className='comment-tag'>{postComment.description}</p>
                </div>
                </>
            ))}
        </div>

    )
}

export default PostDetailsPage
