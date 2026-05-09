console.log('Extension MP3000 loaded (content)')

browser.storage.sync.get('optionA').then((res) => {
    console.log(`[content] Option A = ${String(res.optionA ?? '')}`)
})

browser.storage.onChanged.addListener((changes) => {
    if (changes.optionA) {
        console.log(`[content] Option A = ${String(changes.optionA.newValue ?? '')}`)
    }
})
