function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    //https://demo.api-platform.com/top_books?page=1
    //http://localhost:8081/test
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.title
    })
}

export { handleSubmit }
