import React from 'react'
import { TodoItem } from './TodoItem'
import PropTypes from 'prop-types'

export const TodoList = props => { 
    return (
        <ul className="todoList">
            {props.todos.map(todo =>
                <TodoItem key={todo.id}
                    { ...todo}
                    handleToggle={props.handleToggle}
                    handleOnchangeCheckbox={props.handleOnchangeCheckbox}
                    handleRemove={props.handleRemove}
                />)}
          </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleOnchangeCheckbox: PropTypes.func,
    handleRemove: PropTypes.func.isRequired
}
