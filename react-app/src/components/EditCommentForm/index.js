import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from 'react-router';
import { editComment } from "../../store/comment";
import { getUsers } from "../../store/user";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function EditCommentForm({comment, setShowCommentModal, post, setShowButton}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const [description, setDescription] = useState(comment.description)
    const updatedComment = (e) => setDescription(e.target.value)
    const commentId = comment?.id
    const user = useSelector(state => state.session.user)
    const userId = user?.id
    const username = user?.username
    const postId = post?.id

    useEffect(() => {
        dispatch(getUsers(),
        )}, [dispatch])

    const handleSubmit=async (e)=>{
        e.preventDefault();
        setShowCommentModal(false)
        const payload={
            description,
            commentId,
            userId,
            username,
            postId
        }
        console.log(payload)
        const added=await dispatch(editComment(payload))
        if(added) {
            history.push(`/`)
        }


    }

    return (
        <div className='edit-comment-modal'>
        <form onSubmit={handleSubmit}>
            <input
            placeholder='Update Comment'
            value={description}
            onChange={updatedComment}></input>
            <button onClick={(e) => {setShowButton(true)}}type='submit'>Edit</button>
        </form>
        </div>
    )
}


export default EditCommentForm
