import PostBar from "../PostBar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getPosts } from "../../store/post"
import './HomePage.css'
import { useHistory } from "react-router"
import PostsContainer from "../HomePagePosts"
import { getComments } from "../../store/comment"

function HomePage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector((state) => (state.session.user))
    const userId = user.id

    useEffect(() => {
        dispatch(getComments())
    }, [dispatch])


    return (
        <>
        <div className='home-page-container'>
            <PostsContainer/>
        </div>
        </>
    )
}

export default HomePage
