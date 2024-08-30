import React from 'react'

const Todo = ({todo, ontoggleComplete, onDelete})=>{

    return (
        <il>
            <input
            type='checkbox'
            checked={todo.completed}
            onChange={(ontoggleComplete(todo.id))}

            />
            <spam>{todo.text}</spam>
            
        </il>
    )
}
export default Todo