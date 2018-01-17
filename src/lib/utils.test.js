import { pipe } from './utils';

const inc = (num) => num + 1
const dbl = (num) => num * 2

test('pipe passes the value of inc to dbl', () => { 
    const pipeline = pipe(inc, dbl)
    const result = pipeline(5)
    expect(result).toBe(12)
})

test('pipe passes the value of inc to dbl and back to inc', () => { 
    const pipeline = pipe(inc, dbl, inc)
    const result = pipeline(4)
    expect(result).toBe(11)
})