function logOptionA(value: unknown) {
    console.log(`[bg] Option A = ${String(value ?? '')}`)
}

browser.runtime.onInstalled.addListener(() => {
    console.log('Extension MP3000 loaded (bg)')
    browser.storage.sync.get('optionA').then((res) => logOptionA(res.optionA))
})

browser.storage.onChanged.addListener((changes) => {
    if (changes.optionA) {
        logOptionA(changes.optionA.newValue)
    }
})
