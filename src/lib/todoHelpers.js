/**
 * the addTodo function helper
 * @param {*} list 
 * @param {*} item 
 */
export const addTodo = (list, item) => [item, ...list]

/**
 * Generate random id
 */
export const generateId = () => Math.floor(Math.random() * 100000)