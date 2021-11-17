import './PostBar.css'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { removePost } from '../../store/post';
import EditPostModal from '../EditPostModal';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import commentReducer, { getComments } from '../../store/comment';

function PostBar({post}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((state) => (state.session.user))
    const comments = useSelector((state) => Object.values(state.commentReducer))
    const postComments = comments.filter(comment => comment.postId == post.id)
    const handleDelete = async (e, post) => {
        e.preventDefault();
        let data = await dispatch(removePost(post.id))
        if (data) {
            history.push(`/`)
        }
    }


    useEffect(() => {
        dispatch(getComments())
    }, [dispatch])


    return (
        <div className='post-bar-container'>
            <img className='post-image'src={post.image}></img>
            <div className='post-name-description-container'>
            <p className='post-name'>{post.name}</p>
            {post.description.length > 50 ?
            <p className='post-description'>{post.description.slice(0, 100) + '...'}</p> :
            <p>{post.description}</p>
            }
            {postComments.length === 1 ?
            <p>{postComments.length} comment</p> :
            <p>{postComments.length} comments</p>}
        </div>
            {post.userId == user.id ?
            <>
            <div className='post-bar-buttons'>
            <EditPostModal post={post}/>
            <button onClick={(e)=> {handleDelete(e, post)}}>Delete</button>
            </div>
            </> :
            <></>}
        </div>

    )
}

export default PostBar
