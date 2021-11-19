const LOAD_COMMENTS = 'comment/LOAD_COMMENTS';
const ADD_COMMENT = 'comment/ADD_COMMENT';
const DELETE_COMMENT = 'comment/DELETE_COMMENT'

const loadComments = (comments) => ({
    type: LOAD_COMMENTS,
    comments,
  });

const addComment = (comment) => ({
    type: ADD_COMMENT,
    comment
})

const deleteComment=(comment) => ({
    type: DELETE_COMMENT,
    comment
})

export const editComment = (payload) => async(dispatch) => {
    const response = await fetch(`/api/comments/${payload.commentId}/edit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })
    const newComment = await response.json();
    dispatch(addComment(newComment));
    return newComment
}



export const getComments = () => async(dispatch) => {
    const response = await fetch(`/api/comments`)
    const data = await response.json()
    dispatch(loadComments(data.comments))
}

export const createComment = (payload) => async (dispatch) => {
    const response = await fetch(`/api/comments/add` , {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(payload)
    })
    if (response.ok) {
        const comment = await response.json()
        dispatch(addComment(comment))
        return comment
    }
}

export const removeComment=(commentId)=>async(dispatch) => {
    const response = await fetch(`/api/comments/${commentId}/delete`, {
        method: 'DELETE',
        statusCode: 204,
        headers: {'Content-Type': 'application/json'}
    })
    if(response.ok) {
        const comment = await response.json();
        dispatch(deleteComment(comment.id));
      }
}

const initialState = {};


const commentReducer =(state = initialState, action) => {
    switch (action.type) {
        case LOAD_COMMENTS: {
            let newState = {...state};
            (action.comments).forEach(comment => {
                newState[comment.id] = comment
            })
            return newState
        }
        case ADD_COMMENT: {
            const newState={...state}
            newState[action.comment.id] = action.comment
            return newState
        }

        case DELETE_COMMENT: {
            const newState = {...state}
            delete newState[action.comment]
            return {...newState}
        }
        default:
        return state
    }
}

export default commentReducer
