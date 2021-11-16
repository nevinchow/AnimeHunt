import PostBar from "../PostBar"
import { useDispatch } from "react-redux"
import { useEffect } from "react"


function HomePage() {
    const dispatch = useDispatch()


    useEffect(() => {
        // dispatch(getPosts())
    })
    return (
        <PostBar/>
    )
}

export default HomePage
