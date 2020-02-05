const initialState = {
    customListBuy: [],
    key: ''
};

const CustomListReducer = (state = initialState, action) => {
    
    if(action.type == 'customList')({
        ...state,
        customListBuy: action.payload.customListBuy
    })

    if(action.type == 'newCustomList')({
        ...state,
        customListBuy: action.payload.customListBuy
    })

    if(action.type === 'SET_KEY')({
        ...state,
        key: action.key
    })

    return state;
};

export default CustomListReducer;