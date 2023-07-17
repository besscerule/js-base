const testAddition = require('./app')

describe('testAdditon', () => {
    test('1 + 2 = 3', () => {
        const result = testAddition(1, 2)
        expect(result).toBe(3)
    })
})
