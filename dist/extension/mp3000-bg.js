browser.runtime.onInstalled.addListener(() => {
    console.log('Extension MP3000 loaded (bg)')
})

let first = true
browser.runtime.onMessage.addListener((message, callback) => {
    const subFolder = 'aaa'
    const arr = message.path.split('/')
    arr[arr.length-1] = arr[arr.length-1].split('?')[0]
    browser.downloads.download({
        filename: subFolder+'/'+arr[arr.length-1],
        url: message.path
    })
        .then(downloadId => {
            //console.log(downloadId)
        })
        .catch(err => console.log(err))
    first = false
})
