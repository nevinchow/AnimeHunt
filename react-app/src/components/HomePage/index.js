import PostBar from "../PostBar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getPosts } from "../../store/post"

function HomePage() {
    const dispatch = useDispatch()
    const user = useSelector((state) => (state.session.user))
    const userId = user.id
    const posts = useSelector((state) => Object.values(state.postReducer))

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])


    return (
        <div>
            {posts.map((post)=>(
                <>
                <PostBar post={post}/>


                </>
            ))}
        </div>
    )
}

export default HomePage
