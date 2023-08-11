import {GM,GN} from "./Message.action"
let initialState={
    message:"Hello..."
}
const Reducer=(state=initialState,action)=>{
    switch(action.type){
     case GM:
        console.log("reducer");
        return {message:"good morning"}
     case GN:
        return {message:"good night"}
     default :
        return state
    }
  
}
export {Reducer}