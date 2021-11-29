import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import './PostDetailsPage.css'
import { getComments } from '../../store/comment';
import { createComment } from '../../store/comment';
import { removeComment } from '../../store/comment';
import EditCommentModal from '../EditCommentModal';
import { getUsers } from '../../store/user';

function PostDetailsPage ({setShowModal, post}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const postId = post?.id
    const comments = useSelector(state => Object.values(state.commentReducer))
    const postComments = comments?.filter((comment) => comment.postId === postId)
    const user = useSelector(state => state.session.user)
    const userId = user?.id
    const username = user?.username
    const profilePic = user?.profilePic
    const allUsers = useSelector(state=> Object.values(state.userReducer))
    const [description, setDescription] = useState('')
    const [showButton, setShowButton] = useState(true)
    const [errors, setErrors] = useState([]);


    const updateComment = (e) => setDescription(e.target.value)
    const handleCancel= (e) => {
        setShowModal(false)
        e.preventDefault();
      }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const payload = {
            userId,
            postId,
            description,
            username,
            profilePic
        }

        let errors = [];
        if(!description) errors.push('Please provide a description to post a comment.')
        if(description.length > 255) errors.push('Playlist name must be less than 400 characters.')

        if (errors.length > 0) {
            setErrors(errors);
            return null;
            } else {
                setErrors([])
                const added = await dispatch(createComment(payload))
                if (added) {
                    history.push(`/`)
                }
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
        dispatch(getComments())
        dispatch(getUsers())
    }, [dispatch])

    return (

        <div className='modal-wrapper-details'>
            <div className='post-title-cancel-button'>
            <h2 className='post-details-title'>{post.name}</h2>
            <button className='post-details-close'onClick={handleCancel}>X</button>
            </div>
            <img className='post-detail-image'src={post.image}></img>
            <p className='post-details-description'>{post.description}</p>
            <h3 className='discussion-tag'>Discussion</h3>
            {errors.length > 0 && (
        <div className="errors" style= {{display: showButton ? "block" : "none"}}>
            <p className="error-title"> The following errors were found: </p>
            <ul className="error-list">
                {errors.map(error => <li className="error" key={error}>{error}</li>)}
            </ul>
        </div>
        )}
            <form style= {{display: showButton ? "block" : "none"}} onSubmit={handleSubmit}>
                <input className='comment-input'
                placeholder='Leave a comment'
                value={description}
                onChange={updateComment}/>
                <button type='submit'>Submit</button>
            </form>
            {postComments.map((postComment) => (
                <>
                 <div className='username-comment-image'>
                    <div className='comment-profile-pic-container'>
                    <img src={postComment.profilePic} className='comment-profile-pic'></img>
                    </div>
                    <div className='username-comment'>
                    <p className='username-tag'>{postComment.username}</p>
                    <p className='comment-tag'>{postComment.description}</p>
                    </div>
                    {postComment.userId === userId ?
                    <>
                    <div className='edit-delete-comment-container'>
                    <EditCommentModal comment={postComment} post={post} setShowButton={setShowButton} showButton={showButton}/>
                    <button className= 'edit-delete-comment-button'style= {{display: showButton ? "block" : "none"}} onClick={(e) => {
                        handleDelete(e, postComment)}}>Delete</button>
                    </div>
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
