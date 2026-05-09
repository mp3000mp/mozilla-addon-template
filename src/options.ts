function initOptions() {
    browser.storage.sync.get('optionA').then((res) => {
        const input = document.querySelector<HTMLInputElement>('#option-a')!
        input.value = res.optionA ?? ''
    })
}

function saveOptions(e: Event) {
    e.preventDefault()
    const input = document.querySelector<HTMLInputElement>('#option-a')!
    browser.storage.sync.set({ optionA: input.value })
}

document.addEventListener('DOMContentLoaded', initOptions)
document.querySelector('form')!.addEventListener('submit', saveOptions)
