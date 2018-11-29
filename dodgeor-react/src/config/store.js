import { createStore, combineReducers} from 'redux'
import playerReducer from '../features/player/reducer'

// for states, javascript object that has keys/values. (value whatever reducer returns)
const rootReducer = combineReducers({
    player: playerReducer, 
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // allow browser to inspect redux store
)

export default store