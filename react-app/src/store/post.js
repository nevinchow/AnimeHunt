// constants
const LOAD_POSTS = 'post/LOAD_POSTS';
const ADD_POST = 'post/ADD_POST'

const loadPosts = (posts) => ({
  type: LOAD_POSTS,
  posts,
});

const addPost=(post)=>({
    type: ADD_POST,
    post
})

// export const getPostsById = (userId) => async(dispatch) => {
//     const response = await fetch(`/api/posts/${userId}`)
//     const posts = await response.json()
//     dispatch(loadPosts(posts.posts))
// }

export const getPosts = () => async(dispatch) => {
    const response = await fetch(`/api/posts`)
    const posts = await response.json()
    dispatch(loadPosts(posts.posts))
}

export const createPost=(payload) => async(dispatch) => {
    const response = await fetch(`/api/posts/add_post` , {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(payload)
    })
    if (response.ok) {
        const post = await response.json()
        dispatch(addPost(post))
        return post
    }
}

const initialState = {};


const postReducer =(state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS: {
            let newState = {...state};
            (action.posts).forEach(post => {
                newState[post.id] = post
            })
            return newState
        }

        case ADD_POST: {
            const newState={...state}
            newState[action.post.id] = action.post
            return newState
        }
        default:
        return state
    }
}

export default postReducer
