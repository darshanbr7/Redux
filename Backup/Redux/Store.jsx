import {createStore} from "redux"
import {CounterReducer} from"./Counter.reducer"
let store=createStore(CounterReducer)
export {store}