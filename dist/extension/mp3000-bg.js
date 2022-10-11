let subFolder = 'mp3000'
browser.storage.onChanged.addListener((changes) => {
    if (changes.subFolder) {
        subFolder = changes.subFolder.newValue
    }
})

browser.runtime.onInstalled.addListener(() => {
    console.log('Extension MP3000 loaded (bg)')
})

browser.runtime.onMessage.addListener((message, callback) => {
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
})
