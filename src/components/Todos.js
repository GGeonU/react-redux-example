import React from 'react';
import TodoItem from "./TodoItem";

const Todos = ({input, todos, onChangeInput, onInsert, onToggle, onRemove}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onInsert(input);
        onChangeInput('')
    };

    const onChange = (e) => {
        onChangeInput(e.target.value);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange}/>
                <button type="submit">submit</button>
            </form>
            <div>
                {todos.map(todo => (
                    <TodoItem todo={todo}
                              key={todo.id}
                              onRemove={onRemove}
                              onToggle={onToggle} />
                              ))}
            </div>
        </div>
    );
};


export default Todos;