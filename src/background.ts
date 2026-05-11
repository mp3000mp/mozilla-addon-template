import { getOption, onOptionChanged } from './utils'

function logOptionA(value: string) {
  console.log(`[MP3000 bg] Option A = ${value}`)
}

browser.runtime.onInstalled.addListener(() => {
  console.log('Extension MP3000 loaded (bg)')
  getOption('optionA').then(logOptionA)
})

onOptionChanged('optionA', logOptionA)
