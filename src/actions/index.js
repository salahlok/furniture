import * as actionTypes from '../reducers/shopping-types'



export const Open = () =>{
    return {
        type: 'OPEN',
    }
}


export const addToCart = (itemID)=>{
    return {
        type : actionTypes.ADD_TO_CART,
        payload : {
            id:itemID,
        }
    }
}

export const removeFromCart = (itemID)=>{
    return {
        type:actionTypes.REMOVE_FROM_CART,
        payload : {
            id:itemID,
        }
    }
}


export const adjustQty = (itemID,value)=>{
    return {
        type:actionTypes.ADJUST_QTY,
        payload : {
            id:itemID,
            qty:value
        }
    }
}

export const loadCurrentView = (item)=>{
    return {
        type : actionTypes.LOED_CURRENT_ITEM,
        payload : item,
    }
}