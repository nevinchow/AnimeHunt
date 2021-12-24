import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getPosts } from "../../store/post"
import PostDetailsModal from "../PostDetailsModal";
import UpvoteDownvoteCounter from "../UpvoteDownvoteCounter";
function PostsContainer () {
    const dispatch = useDispatch()
    const posts = useSelector((state) => Object.values(state.postReducer))


    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])



    return (
        <>
         {posts.reverse().map((post)=>(
                <>
                <PostDetailsModal post={post}/>
                </>
            ))}
        </>
    )
}

export default PostsContainer
