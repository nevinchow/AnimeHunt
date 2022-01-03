// constants
const LOAD_POSTS = 'post/LOAD_POSTS';
const ADD_POST = 'post/ADD_POST'
const DELETE_POST = 'post/DELETE_POST'

const loadPosts = (posts) => ({
  type: LOAD_POSTS,
  posts,
});

const addPost=(post)=>({
    type: ADD_POST,
    post
})

const deletePost=(post) => ({
    type: DELETE_POST,
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
    const {
        name,
        description,
        file,
        userId
    } = payload

    const form = new FormData();
    form.append("name", name)
    form.append("description", description)
    form.append("userId", userId)
    form.append("file", file)
    const response = await fetch(`/api/posts/add_post` , {
        method: 'POST',
        body: form
    })
    if (response.ok) {
        const post = await response.json()
        dispatch(addPost(post))
        return post
    }
}


export const editPost = (payload) => async(dispatch) => {
    const {
        name,
        description,
        file,
        postId,
        userId
    } = payload
    const form = new FormData();
    form.append("name", name)
    form.append("description", description)
    form.append("file", file)
    form.append("postId", postId)
    form.append("userId", userId)
    const response = await fetch(`/api/posts/${payload.postId}/edit`, {
        method: 'POST',
        body: form
    })
    const newPost = await response.json();
    dispatch(addPost(newPost));
    return newPost
}

export const removePost=(postId)=>async(dispatch) => {
    const response = await fetch(`/api/posts/${postId}/delete`, {
        method: 'DELETE',
        statusCode: 204,
        headers: {'Content-Type': 'application/json'}
    })
    if(response.ok) {
        const post = await response.json();
        dispatch(deletePost(post.id));
      }
}

export const increaseUpvote=(post)=> async(dispatch) => {
    const response = await fetch(`/api/posts/${post.id}/upCount`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
    })
    const updatedPost = await response.json();
    dispatch(addPost(updatedPost));
    return updatedPost
}


export const decreaseUpvote=(post)=> async(dispatch) => {
    const response = await fetch(`/api/posts/${post.id}/downCount`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
    })
    const updatedPost = await response.json();
    dispatch(addPost(updatedPost));
    return updatedPost
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

        case DELETE_POST: {
            const newState = {...state}
            delete newState[action.post]
            return {...newState}
        }
        default:
        return state
    }
}

export default postReducer
