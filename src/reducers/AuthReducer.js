const initialState = {
    name: 'dionei'
};

const AuthReducer = (state = initialState, action) => {
    if(action.type == 'customList') {
        return {...state, name: action.payload.name}
    }
    return state;
};

export default AuthReducer;