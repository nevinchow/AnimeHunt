function PostBar({post}) {
    return (
        <div>
            <img src={post.image}></img>
            <h2>{post.name}</h2>
            {post.description.length > 50 ?
            <h2>{post.description.slice(0, 50) + '...'}</h2> :
            <h2>{post.description}</h2>
            }
        </div>

    )
}

export default PostBar
