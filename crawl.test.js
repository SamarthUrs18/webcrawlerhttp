const {normalizeURL} = require('./crawl.js')
const {test, expect} = require('@jest/globals')

test('normalizeURL with slash',()=>{
   const input='https://google.com/javascript/'
   const actual=normalizeURL(input)
   const expected='google.com/javascript'
   expect(actual).toEqual(expected) 
})

test('normalizeURL',()=>{
    const input='https://google.com/javascript'
    const actual=normalizeURL(input)
    const expected='google.com/javascript'
    expect(actual).toEqual(expected) 
 })