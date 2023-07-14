import {all} from "redux-saga/effects"
import {watchLoginService} from './watchLogin'

export default function * rootSaga() {
    yield all ([
        watchLoginService(),
    ])
}