const { JSDOM } = require('jsdom')

function getURLsFromHTML(htmlBody, baseURL){
    const urls = []
    const dom = new JSDOM(htmlBody)
    const links = dom.window.document.querySelectorAll('a')
    links.forEach(link=>{
        const href = link.getAttribute('href')
        if(href){
            const url = new URL(href, baseURL)
            urls.push(url.href)
        }
    })
    return urls
}

function normalizeURL(urlString){
    const objURL=new URL(urlString)
    const hostpath = `${objURL.hostname}${objURL.pathname}`
    if(hostpath.length>0 && hostpath.slice(-1) === '/'){
        return hostpath.slice(0, -1)
    }
    return hostpath
}

module.exports={
    normalizeURL,
    getURLsFromHTML
}