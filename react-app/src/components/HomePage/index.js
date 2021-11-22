import { useDispatch } from "react-redux"
import { useEffect } from "react"
import './HomePage.css'

import PostsContainer from "../HomePagePosts"
import { getComments } from "../../store/comment"

function HomePage() {
    const dispatch = useDispatch()


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
