const googleSearch = require('../src/server')

const dbMoch = ['dsd.com', 'swrd.com', 'lol.org']

describe('Unit test fillter function', () => {
    it('should return empty array with random data', ()=>{
        expect(googleSearch('testtest', dbMoch)).toEqual([])
        // googleSearch('google', dbMoch)
    })

    it('should return values in array', () => {
        expect(googleSearch('dsd', dbMoch)).toEqual(['dsd.com'])
    })

    it('should return empty array with params undefined and null', ()=>{
        expect(googleSearch(undefined, dbMoch)).toEqual([])
        expect(googleSearch(null, dbMoch)).toEqual([])

        // googleSearch('google', dbMoch)
    })

    it('it does not return more than 2 matches', () => {
        expect(googleSearch('.com', dbMoch).length).toEqual(2)

    })

    afterAll(() => setTimeout(() => process.exit(), 1000))
})