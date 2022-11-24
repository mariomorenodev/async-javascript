const fnAsync = () => {
  return new Promise((resolve, reject) => {
    const success = true
    if (success === true) {
      setTimeout(() => {
        resolve('Async!!')
      }, 3000)
    } else {
      reject(new Error('Error Async!!'))
    }
  })
}

const fnAsyncAwait = async () => {
  const hello = await fnAsync()
  console.log(hello)
}

console.log('Before')
fnAsyncAwait()
console.log('After')
