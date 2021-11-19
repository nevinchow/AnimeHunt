import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { createPost } from '../../store/post';
import { useSelector } from 'react-redux';
import './PostDetailsPage.css'
import { getComments } from '../../store/comment';
import { createComment } from '../../store/comment';
import { getUsers } from '../../store/user';
import { removeComment } from '../../store/comment';
import EditCommentModal from '../EditCommentModal';

function PostDetailsPage ({setShowModal, post}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const postId = post?.id
    const comments = useSelector(state => Object.values(state.commentReducer))
    const postComments = comments.filter((comment) => comment.postId === postId)
    const user = useSelector(state => state.session.user)
    const userId = user?.id
    const username = user.username
    const [description, setDescription] = useState('')
    const [showEditForm, setShowEditForm] = useState(false)
    const [showButton, setShowButton] = useState(true)


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

    const handleDelete = async (e, postComment) => {
        e.preventDefault();
        let data = await dispatch(removeComment(postComment.id))
        if (data) {
            history.push(`/`)
        }
    }



    useEffect(() => {
        dispatch(getComments(),
        )}, [dispatch])

    return (

        <div className='modal-wrapper'>
            <div className='post-title-cancel-button'>
            <h2>{post.name}</h2>
            <button className='post-details-close'onClick={handleCancel}>X</button>
            </div>
            <img className='post-detail-image'src={post.image}></img>
            <p>{post.description}</p>
            <h3>Discussion</h3>
            <form style= {{display: showButton ? "block" : "none"}} onSubmit={handleSubmit}>
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
                    {postComment.userId == userId ?
                    <>
                    <EditCommentModal comment={postComment} post={post} setShowButton={setShowButton} showButton={showButton}/>
                    <button style= {{display: showButton ? "block" : "none"}} onClick={(e) => {
                        setShowButton(false)
                        handleDelete(e, postComment)}}>Delete</button>
                    </> :
                    <></>
                    }
                </div>
                </>
            ))}
        </div>

    )
}

export default PostDetailsPage
