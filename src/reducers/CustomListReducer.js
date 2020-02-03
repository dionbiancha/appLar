const initialState = {
    customListBuy: []
};

const CustomListReducer = (state = initialState, action) => {
    
    if(action.type == 'customList') {
        return {
            ...state,
            customListBuy: action.payload.customListBuy
        }
    }

    if(action.type == 'newCustomList') {
        return {
            ...state,
            customListBuy: action.payload.customListBuy
        }
    }
    return state;
};

export default CustomListReducer;