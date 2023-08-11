import {Inc} from "./Counter.action"
const initialState=0
const CountReducer=(state=initialState,action)=>{
    switch(action.type){
        case Inc:
            return state+1
        case "Decrement":
            return state-1
        case "Reset":
            return initialState
        default:
            return state
    }
}
export {CountReducer}