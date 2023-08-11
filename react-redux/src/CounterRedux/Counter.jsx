import React from 'react'
import{incrementAction,Decrement,Reset} from "./Counter.action"
import {useDispatch,useSelector} from "react-redux"
const Counter = () => {
    const dispatch=useDispatch()

    const IncrementHandler=()=>{
        dispatch(incrementAction())
    }
    const DecrementHandler=()=>{
        dispatch(Decrement())
    }
    const ResetHandler=()=>{
        dispatch(Reset())
    }
    let value=useSelector((state)=>{
        return state
    })
  return (
    <div>
        <button className='btn btn-primary ml-4' onClick={IncrementHandler}>+</button>
        <button className='btn btn-primary ml-4' onClick={DecrementHandler}>-</button>
        <button className='btn btn-primary ml-4'onClick={ResetHandler}>Reset</button>
        <p>{value}</p>
    </div>
  )
}

export default Counter