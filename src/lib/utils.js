/**
 * Partial
 * @param {*} fn 
 * @param {*} args 
 */
export const partial = (fn, ...args) => fn.bind(null, ...args)

/**
 * Pipe function
 * @param {*} f 
 * @param {*} g 
 */
const _pipe = (f, g) => (...args) => g(f(...args))

export const pipe = (...fns) => fns.reduce(_pipe)