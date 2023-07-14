import { actionTypes } from "../Constants/actionsTypes"; 

export const getAllActions = (data) => {
    return {
        type: actionTypes.GET_LISTA_ACCIONES,
        data
    }
}

export const setAllActions = (data) => {
    return {
        type: actionTypes.SET_LISTA_ACCIONES,
        data
    }
}
