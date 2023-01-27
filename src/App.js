import { createContext, useState } from 'react';
import './App.css';
import LongForm from './Pages/LongForm';
import Parent from './Pages/Parent';
import UseReducerCounter from './Pages/UseReducerCounter';

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);

  const value = { count, setCount };

  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <>
        {/* <Parent />
        <UseReducerCounter /> */}
        <LongForm />
      </>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
