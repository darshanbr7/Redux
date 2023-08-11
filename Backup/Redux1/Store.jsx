import {createStore} from "redux"
import {Reducer} from './Message.reducer'
let store=createStore(Reducer)
export {store}