import {createStore,applyMiddleware,combineReducers} from 'redux'
import { messageReducer } from "./reducer";


//汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
	plans:messageReducer
	
})

const store = createStore(allReducer);
export default store
