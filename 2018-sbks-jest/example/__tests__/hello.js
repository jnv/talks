const {createGreeting} = require('../hello')

describe('.createGreeting', () => {
    it('generates greeting', () => {
        expect(createGreeting('World')).toMatchSnapshot()
    })
})