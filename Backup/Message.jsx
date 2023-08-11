import React from 'react'
import {gmAction,gnAction} from "./Redux/Message.action"
import {useDispatch,useSelector} from "react-redux"

const Message = () => {
    let message=useSelector((state)=>{
    return state.message

    })
    let dispatch=useDispatch()
    let gmHandler=()=>{
        dispatch(gmAction())
    }
    let gnHandler=()=>{
        dispatch(gnAction())
    }
   
  return (
    <React.Fragment>
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 mt-5">
            <div className="card">
                <div className="card-body">
                <p>message:{message}</p>
                <button className='btn btn-primary mr-4' onClick={gmHandler}>GM</button>
                <button className='btn btn-warning' onClick={gnHandler}>GM</button>
                </div>
            </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Message