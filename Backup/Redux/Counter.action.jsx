let Inc="Inc"
let Dec="Dec"
let incrementAction=()=>{
    return{type:Inc}
}
let decrementAction=()=>{
    return{type:Dec}
}
export{incrementAction,decrementAction,Inc,Dec}