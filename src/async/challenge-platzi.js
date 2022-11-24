export async function runCode(url) {
  try {
    const categories = await fetchData(url)
    return categories
  } catch {
    throw new Error('Something was wrong')
  }
}

async function fetchData(urlApi) {
  try {
    urlApi = new URL(urlApi)
  } catch (_) {
    throw new Error('Invalid URL')
  }

  const response = await fetch(urlApi)
  const data = await response.json()
  return data
}

runCode('https://api.escuelajs.co/api/v1/categories')
