const getTodos = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        throw new Error(error)
    }
}
