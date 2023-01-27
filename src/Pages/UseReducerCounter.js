import React from 'react';
import { useReducer } from 'react';

const UseReducerCounter = () => {

    const initialState = 0;

    const reducer = (prevState, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return prevState + 1
            case 'INCREMENTBY5':
                return prevState + action.payload
            case 'DECREMENT':
                return prevState - 1
            default:
                return prevState;
        }
    }

    const [currentState, dispatch] = useReducer(reducer, initialState);

    console.log(currentState)

    return (
        <>
            <div style={{ border: '1px solid', width: '300px', margin: '40px auto', padding: '20px' }}>
                <h1>Use Reducer Counter</h1>
                <h2>Count: {currentState}</h2>
                <div>
                    <button style={{ marginRight: '10px' }} onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
                    <button style={{ marginRight: '10px' }} onClick={() => dispatch({ type: 'INCREMENTBY5', payload: 5 })}>Increment By 5</button>
                    <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
                </div>
            </div>
        </>
    );
};

export default UseReducerCounter;