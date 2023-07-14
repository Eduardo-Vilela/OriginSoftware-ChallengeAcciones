import { actionTypes } from "../constantes/actionTypes";
import { takeEvery, call, put } from'redux-saga/effects';

import apiAllActions from "../Api/allActions";
import { setAllActions } from "../Actions/AllActions";

export const watchListUser = function * (){
    yield takeEvery(actionTypes.GET_LISTA_ACCIONES, fetchListActions)
}
function* fetchListActions (action){
    try{
        const data = yield call(apiAllActions, action.data)
        if(data){
            yield put(setAllActions(data))
        }
    }catch(err){
        console.log(err)
    }
}