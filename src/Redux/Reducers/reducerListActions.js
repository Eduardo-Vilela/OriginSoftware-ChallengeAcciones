import { actionTypes } from "../Constants/actionsTypes";
import { store } from "../Store/store";
function reducerListActions (state = store.listaUsuarios, action){
    switch(action.type){
        case actionTypes.SET_LISTA_ACCIONES:
            let dataActions = action.data
            return Object.assign({}, state, {
                data: dataActions,
            })
            default:
                return state
    }
}

export default reducerListActions;