import './PostBar.css'
import { useSelector } from 'react-redux';
import UpvoteDownvoteCounter from '../UpvoteDownvoteCounter';
function PostBar({post}) {
    const comments = useSelector((state) => Object.values(state.commentReducer))
    const postComments = comments.filter((comment) => comment.postId === post.id)
    return (
        <>
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
            <p>{postComments.length} comments</p>
            }
        </div>
        <div className="upvoteContainer">
        <UpvoteDownvoteCounter post={post}/>
        </div>
        </div>
            </>
    )
}

export default PostBar
