import React, { useReducer } from 'react'

import "./cmp.css";

const intialState = {
    count: 0
}

const reducer = (state, action) => {
    switch(action.type)
    {
        case "increase":
            return{
                count:state.count+1
            }
        case "decrease":
            if(state.count>0){
            return{count:state.count-1 }   
        } 
        else{
            return{count:0}
        }
        case "reset":
            return{
                count:0
            }    
        default:
            return state;    
    }

}
const MultipleCounter = () => {

    const [state, dispatchOne] = useReducer(reducer, intialState)
    const [stateTwo, dispatchTwo] = useReducer(reducer, intialState);

    return (
        <div className='container'>
        <div className='box1'>
            <div className="display">
                <p>{state.count}</p>
            </div>
            <div className='buttons'>
                <button onClick={()=>dispatchOne({type:"increase"})}>+</button>
                <button onClick={()=>dispatchOne({type:"decrease"})}>-</button>
                <button onClick={()=>dispatchOne({type:"reset"})}>reset</button>
            </div>
        </div>
        <div className="box2">
            <div className="display">
                <p>{stateTwo.count}</p>
            </div>
            <div className="buttons">
                <button onClick={()=>dispatchTwo({type:"increase"})}>+</button>
                <button onClick={()=>dispatchTwo({type:"decrease"})}>-</button>
                <button onClick={()=>dispatchTwo({type:"reset"})}>reset</button>
            </div>
        </div>
        </div>
    )
}

export default MultipleCounter;