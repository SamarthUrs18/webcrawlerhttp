const {normalizeURL, getURLsFromHTML} = require('./crawl.js')
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

 test('getURLsFromHTML',()=>{
   const inputHTMLBody=`
   <html>
      <body> 
         <a href="https://google.com/javascript">JavaScript</a>
      </body>
   </html>
   `
   const inputBaseURL='https://google.com'
   const actual=getURLsFromHTML(inputHTMLBody, inputBaseURL)
   const expected=['https://google.com/javascript']
   expect(actual).toEqual(expected) 
}) 