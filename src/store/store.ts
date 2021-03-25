import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({})
const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>

export default store
