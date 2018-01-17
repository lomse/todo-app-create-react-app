/**
 * addTodo
 * 
 * @param {any} list 
 * @param {any} item 
 */
export const addTodo = (list, item) => [item, ...list]

/**
 * generateId
 * 
 */
export const generateId = () => Math.floor(Math.random() * 100000)

/**
 * findById
 * 
 * @param {any} id 
 * @param {any} list 
 */
export const findById = (id, list) => list.find(item => item.id === id)


/**
 * toggleTodo
 * 
 * @param {any} todo 
 */
export const toggleTodo = (todo) => ({ ...todo, isComplete: !todo.isComplete })

/**
 * updateTodo
 * 
 * @param {any} list 
 * @param {any} updatedItem 
 * @returns 
 */
export const updateTodo = (list, updatedItem) => { 
    const updatedIndex = list.findIndex(item => item.id === updatedItem.id)

    return [
        ...list.slice(0, updatedIndex),
        updatedItem,
        ...list.slice(updatedIndex + 1)
    ]
}

export const removeTodo = (list, todoId) => {
    const todoIndex = list.findIndex(item => item.id === todoId)
    return [
        ...list.slice(0, todoIndex),
        ...list.slice(todoIndex + 1)
    ]
}

