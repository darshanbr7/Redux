import {createStore}from "redux"
import {CountReducer} from "./Counter.Reducer"
const store=createStore(CountReducer)
export {store}