import React from 'react';
import './App.css';
// import CounterContainer from "./containers/CounterContainer";
// import Todos from "./components/Todos";
// import TodosContainer from "./containers/TodosContainer";
// import Counter from "./components/Counter";
// import UsehooksContainer from "./containers/UsehooksContainer";
import HookTodosContainer from "./containers/HookTodosContainer";

function App() {
    return (
        <div className="App">
            <HookTodosContainer/>
        </div>
    );
}

export default App;


