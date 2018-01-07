import React from 'react'
import PropTypes from 'prop-types'

export const TodoItem = props => { 
    return (
        <li>
            <label htmlFor={props.id}>
                <input type="checkbox" id={props.id}
                defaultChecked={props.isComplete}
                onChange={props.handleOnchangeCheckbox}
                /> {props.name}</label>
            </li>
    )
}

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    isComplete: PropTypes.bool,
    name: PropTypes.string.isRequired
}