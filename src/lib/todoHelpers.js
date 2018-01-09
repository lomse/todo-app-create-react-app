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

/**
 * find by id
 * @param {*} id 
 * @param {*} item 
 */
export const findById = (id, list) => list.find(item => item.id === id)