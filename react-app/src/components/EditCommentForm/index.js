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
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        dispatch(getUsers(),
        )}, [dispatch])

    const handleSubmit=async (e)=>{
        e.preventDefault();

        const payload={
            description,
            commentId,
            userId,
            username,
            postId
        }
        let errors = [];
        if(!description) errors.push('Please provide a comment.')
        if(description.length > 255) errors.push('Playlist name must be less than 400 characters.')


        if (errors.length > 0) {
            setErrors(errors);
            return null;
            } else {
                setErrors([])
                const added=await dispatch(editComment(payload))
                if(added) {
                    history.push(`/`)
                    setShowCommentModal(false)
                    setShowButton(true)
                }
            }


    }

    return (
        <div className='edit-comment-modal'>
             {errors.length > 0 && (
        <div className="errors" >
            <p className="error-title"> The following errors were found: </p>
            <ul className="error-list">
                {errors.map(error => <li className="error" key={error}>{error}</li>)}
            </ul>
        </div>
        )}
        <form onSubmit={handleSubmit}>
            <input
            placeholder='Update Comment'
            value={description}
            onChange={updatedComment}></input>
            <button type='submit'>Edit</button>
        </form>
        </div>
    )
}


export default EditCommentForm
