// import {combineReducers} from 'redux'
import {combineReducers} from 'redux-immutable'
import stuff from '../Services/Stuff/reducer'
import auth from '../Services/Auth/reducer'


const rootReducer = combineReducers({
    stuff,
    auth
})

export default rootReducer