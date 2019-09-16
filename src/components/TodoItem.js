import React from 'react';

const TodoItem = ({todo, onToggle, onRemove}) => {
    return(
        <div>
            <input type="checkbox" onClick={() => onToggle(todo.id)} checked={todo.done} readOnly={true}/>
            <span style={{textDecoration: todo.done? 'line-through' : 'none'}}>{todo.text}</span>
            <button onClick={() => onRemove(todo.id)}>delete</button>
        </div>
    )
};

export default TodoItem;