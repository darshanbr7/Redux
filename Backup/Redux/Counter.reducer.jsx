import {Inc,Dec} from "./Counter.action"
let initialState={
    value:0
}
let CounterReducer=(state=initialState,action)=>{
        switch(action.type){
            case Inc:
                return{ value:state.value+1
                }
            case Dec:
                return {value:state.value-1}
            default:
                return  state
        }
}
export {CounterReducer}