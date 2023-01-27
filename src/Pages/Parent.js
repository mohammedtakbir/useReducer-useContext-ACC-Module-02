import React from 'react';
import { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';
import Child from './Child';

const Parent = () => {

    const { count } = useContext(COUNTER_CONTEXT);

    return (
        <>
            <div style={{ border: '1px solid', width: '300px', margin: '0 auto', marginTop: '50px', padding: '20px' }}>
                <h1>Parent Component</h1>
                <h2>Count: {count}</h2>
            </div>
            <Child />
        </>
    );
};

export default Parent;