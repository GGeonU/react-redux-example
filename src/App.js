import React from 'react';
import './App.css';
// import CounterContainer from "./containers/CounterContainer";
// import Todos from "./components/Todos";
import TodosContainer from "./containers/TodosContainer";
import Counter from "./components/Counter";
import CounterContainer from "./containers/CounterContainer";

function App() {
  return (
    <div className="App">
      <CounterContainer />
    </div>
  );
}

export default App;


