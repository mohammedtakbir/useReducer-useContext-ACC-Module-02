import React from 'react';
import { useReducer } from 'react';

const UseReducerCounter = () => {
    
    const initialState = 0;
    const reducer = (state, action) => {
        
        if(action.type === 'INCREMENT'){
            return state + 1
        }else if(action.type === 'DECREMENT'){
            return state -1
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);    

    return (
        <>
            <div style={{ border: '1px solid', width: '300px', margin: '0 auto', marginTop: '50px', padding: '20px' }}>
                <h1>Use Reducer Counter</h1>
                <h2>Count: {state}</h2>
                <div>
                    <button style={{ marginRight: '10px' }} onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
                    <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
                </div>
            </div>
        </>
    );
};

export default UseReducerCounter;