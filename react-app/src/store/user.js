const LOAD_USERS = 'user/loadUsers'

const loadUsers = (users) => ({
    type: LOAD_USERS,
    users,
})

export const getUsers = () => async (dispatch) => {
    const reponse = await fetch(`/api/users`)
    const users = await reponse.json();
    dispatch(loadUsers(users.users))
}

const initialState={}
const userReducer=(state=initialState, action)=>{
    switch (action.type) {
        case LOAD_USERS:
            let newState = {...state};

            (action.users).forEach(user => {
                newState[user.id] = user;
            });
            return newState;


        default:
        return state;
    }
}

export default userReducer
