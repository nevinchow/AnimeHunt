import './PostBar.css'


function PostBar({post}) {
    return (
        <div className='post-bar-container'>
            <img className='post-image'src={post.image}></img>
            <div className='post-name-description-container'>
            <p className='post-name'>{post.name}</p>
            {post.description.length > 50 ?
            <p className='post-description'>{post.description.slice(0, 50) + '...'}</p> :
            <p>{post.description}</p>
            }
        </div>
        </div>

    )
}

export default PostBar
