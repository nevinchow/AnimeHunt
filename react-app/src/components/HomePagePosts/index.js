import PostBar from "../PostBar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getPosts } from "../../store/post"
import { removePost } from '../../store/post';
import { useHistory } from "react-router"
import PostDetailsModal from "../PostDetailsModal";
function PostsContainer () {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector((state) => (state.session.user))
    const userId = user.id
    const posts = useSelector((state) => Object.values(state.postReducer))


    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    const handleDelete = async (e, post) => {
        e.preventDefault();
        let data = await dispatch(removePost(post.id))
        if (data) {
            history.push(`/`)
        }

    }


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
