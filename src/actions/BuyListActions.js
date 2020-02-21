export const NEW_NAVIGATOR = 'NEW_NAVIGATOR';
export const CUSTOM_LIST = 'CUSTOM';
export const NEW_CUSTOM_LIST = 'NEW_CUSTOM_LIST';
export const SET_KEY = 'SET_KEY';

export const customList = customListBuy => ({
  type: CUSTOM_LIST,
  payload: {
    customListBuy: customListBuy,
  },
});

export const newCustomList = customListBuy => ({
  type: NEW_CUSTOM_LIST,
  payload: {
    customListBuy: customListBuy,
  },
});

export const setKey = key => ({
  type: SET_KEY,
  key,
});
