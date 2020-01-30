const initialState = {
    customListBuy: [
        { 
            key: '1',
            title: 'Lista de compras',
            description: 'Compras de domingo',
            totalItens: '10',
            scratched: '6'
        },
        { 
            key: '2',
            title: 'Compras de aniversario',
            description: 'Compras do aniversario do irineu',
            totalItens: '20',
            scratched: '2'
        }
    ]
};

const AuthReducer = (state = initialState, action) => {
    if(action.type == 'customList') {
        return {
            ...state,
            customListBuy: action.payload.customListBuy
        }
    }
    return state;
};

export default AuthReducer;