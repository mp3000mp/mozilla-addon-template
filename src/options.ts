import { getOption, setOption } from './utils'

async function initOptions() {
  const input = document.querySelector<HTMLInputElement>('#option-a')!
  input.value = await getOption('optionA')
}

function saveOptions(e: Event) {
  e.preventDefault()
  const input = document.querySelector<HTMLInputElement>('#option-a')!
  setOption('optionA', input.value)
}

document.addEventListener('DOMContentLoaded', initOptions)
document.querySelector('form')!.addEventListener('submit', saveOptions)
