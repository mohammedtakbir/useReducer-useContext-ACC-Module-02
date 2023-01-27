import React from 'react';
import { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';

const Child = () => {
    
    const {count, setCount} = useContext(COUNTER_CONTEXT);

    return (
        <div style={{ border: '1px solid', width: '300px', margin: '0 auto', marginTop: '50px', padding: '20px' }}>
            <h1>Child Component</h1>
            <h2>Count: {count}</h2>
            <div>
                <button onClick={() => setCount(prevState => prevState + 1)} style={{ marginRight: '10px' }}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
        </div>
    );
};

export default Child;