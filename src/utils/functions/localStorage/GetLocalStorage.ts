export function getLocalStorage(key: string) {
  if (typeof window !== 'undefined') {
    const data = window.localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  }
}
