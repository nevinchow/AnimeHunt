import PostBar from "../PostBar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getPosts } from "../../store/post"
import './HomePage.css'
import { removePost } from '../../store/post';
import { useHistory } from "react-router"
import PostsContainer from "../HomePagePosts"

function HomePage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector((state) => (state.session.user))
    const userId = user.id
   




    return (
        <>
        <div className='home-page-container'>
            <PostsContainer/>
        </div>
        </>
    )
}

export default HomePage
