import { combineReducers} from 'redux'
import isOpen from './navbar'
import shopReducer from './shopping'
const allReducers = combineReducers({
    isOpen:isOpen,
    shop :shopReducer,
    


})


export default allReducers