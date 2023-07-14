import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import reducerLogin from "./reducerLogin";


const rootReducer = combineReducers({
    routing: routerReducer,
    reducerLogin: reducerLogin,

    })
    export default rootReducer;