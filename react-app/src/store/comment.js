const LOAD_COMMENTS = 'comment/LOAD_COMMENTS'

const loadComments = (comments) => ({
    type: LOAD_COMMENTS,
    comments,
})


export const getComments = () => async(dispatch) => {
    const response = await fetch(`/api/comments`)
    const comments = await response.json()
    dispatch(loadComments(comments.comments))
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
        default:
        return state
    }
}

export default commentReducer
