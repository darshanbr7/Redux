let Inc="Increment"
const incrementAction=()=>{
    return { type:Inc}
}

const Decrement=()=>{
    return {
        type:"Decrement"
    }
}
const Reset=()=>{
    return {
        type:"Reset"
    }
}
export {incrementAction,Decrement,Reset,Inc}