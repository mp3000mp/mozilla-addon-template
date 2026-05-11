import { getOption, onOptionChanged } from './utils'

console.log('Extension MP3000 loaded (content)')

function logOptionA(value: string) {
  console.log(`[MP3000 content] Option A = ${value}`)
}

getOption('optionA').then(logOptionA)
onOptionChanged('optionA', logOptionA)
