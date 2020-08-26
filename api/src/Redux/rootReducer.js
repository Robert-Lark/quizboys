import dataReducer from './data/dataReducer'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    user: dataReducer
})

export default rootReducer