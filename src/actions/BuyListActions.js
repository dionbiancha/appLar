export const customList = (customListBuy) => {
    return {
        type: 'customList',
        payload: {
            customListBuy: customListBuy
        }
    }
};

export const newCustomList = (customListBuy) => {
    return {
        type: 'newCustomList',
        payload: {
            customListBuy: customListBuy
        }
    };
};
