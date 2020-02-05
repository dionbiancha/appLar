const initialState = {
    customListBuy: [],
    key: ''
};

const CustomListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'customList':
            return {
                ...state,
                customListBuy: action.payload.customListBuy
            }
        case 'newCustomList':
            return {
                ...state,
                customListBuy: action.payload.customListBuy
            }

        case 'SET_KEY':
            return {
                ...state,
                customListBuy: CustomListReducer.action.payload.customListBuy,
                key: action.key
            }
        default:
            state;
    }

    return state;
};

export default CustomListReducer;