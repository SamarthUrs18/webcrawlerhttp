function normalizeURL(urlString){
    const objURL=new URL(urlString)
    const hostpath = `${objURL.hostname}${objURL.pathname}`
    if(hostpath.length>0 && hostpath.slice(-1) === '/'){
        return hostpath.slice(0, -1)
    }
    return hostpath
}

module.exports={
    normalizeURL
}