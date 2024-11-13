import React from "react";
import "./TodoItem.css";

function TodoItem({ todo, toggleTodoStatus, deleteTodo }) {
    return (
        <li className="todo-item-container">
            <input
                type="checkbox"
                checked={todo.isChecked}
                onChange={() => toggleTodoStatus(todo.id)}
                className="checkbox-input"
            />
            <div className="label-container">
                <label
                    className={`checkbox-label ${todo.isChecked ? "checked" : ""}`}
                >
                    {todo.text}
                </label>
                
                <div className="delete-icon-container">
                    <i
                        className="fas fa-trash delete-icon" 
                        onClick={() => deleteTodo(todo.id)}
                    ></i>
                </div>
            </div>
        </li>
    );
}

export default TodoItem;
