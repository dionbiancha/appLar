import {CUSTOM_LIST, NEW_CUSTOM_LIST, SET_KEY} from '../actions/BuyListActions';

const INITIAL_STATE = {
  customListBuy: [],
  key: '',
};

const CustomListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CUSTOM_LIST:
      return {
        ...state,
        customListBuy: action.payload.customListBuy,
      };
    case NEW_CUSTOM_LIST:
      return {
        ...state,
        customListBuy: action.payload.customListBuy,
      };

    case SET_KEY:
      return {
        ...state,
        customListBuy: CustomListReducer.action.payload.customListBuy,
        key: action.key,
      };
    default:
      state;
  }

  return state;
};

export default CustomListReducer;
