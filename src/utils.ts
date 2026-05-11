export type Options = {
  optionA: string
}

const DEFAULTS: Options = {
  optionA: '',
}

export async function getOption<K extends keyof Options>(key: K): Promise<Options[K]> {
  const res = await browser.storage.sync.get(key)
  return (res[key] as Options[K]) ?? DEFAULTS[key]
}

export async function setOption<K extends keyof Options>(key: K, value: Options[K]): Promise<void> {
  await browser.storage.sync.set({ [key]: value })
}

export function onOptionChanged<K extends keyof Options>(key: K, callback: (value: Options[K]) => void): void {
  browser.storage.onChanged.addListener((changes) => {
    if (changes[key]) {
      callback((changes[key].newValue as Options[K]) ?? DEFAULTS[key])
    }
  })
}
