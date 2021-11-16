// constants
const LOAD_POSTS = 'post/LOAD_POSTS';


const loadPosts = (posts) => ({
  type: LOAD_POSTS,
  posts,
});

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
        default:
        return state
    }
}

export default postReducer
