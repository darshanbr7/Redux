import React from 'react'
import {incrementAction,decrementAction} from "../Redux/Counter.action"
import {useDispatch,useSelector} from "react-redux"
const Counter = () => {
    let dispatch=useDispatch()
    let incrementHandler=()=>{
        dispatch(incrementAction())
    }
    let decrementHandler=()=>{
        dispatch(decrementAction())
    }
    let value=useSelector((state)=>{
        return state.value
    })
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 mt-5">
                    <button className='btn btn-primary mr-4' onClick={incrementHandler}>+</button>
                    <p>{value}</p>
                    <button className='btn btn-primary' onClick={decrementHandler}>-</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter