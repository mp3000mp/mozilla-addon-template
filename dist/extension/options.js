function initOptions() {
    let gettingItem = browser.storage.sync.get('subFolder')
    gettingItem.then((res) => {
        document.querySelector('#sub-folder').value = res.subFolder || 'mp3000'
    })
}

function saveOptions(e) {
    browser.storage.sync.set({
        subFolder: document.querySelector('#sub-folder').value
    })
    e.preventDefault()
}

document.addEventListener('DOMContentLoaded', initOptions)
document.querySelector('form').addEventListener('submit', saveOptions)
