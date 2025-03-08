import React, {useReducer} from 'react'

export default function Reducer() {
    function reducer(state, action){
        if(action.type === "increment"){
            return {
                age: state.age + 1
            };
        } else {
            return {
                age: state.age - 1
            };
        }
    }
    const [state, dispatch] = useReducer(reducer, { age: 19});
    return (
    <div>
      <button onClick={() => {
        dispatch({type: 'increment'})
      }}>increment</button>

      <button onClick={() => {
        dispatch({type: ''})
      }}>decrement</button>

      <h1>{state.age}</h1>
    </div>
  )
}
