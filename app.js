fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

    function appendData(data) {
        const mainContainer = document.getElementById('myData');
        for (let i = 0; i < data.length; i++) {
            const div = document.createElement('div');
            div.innerHTML = `UserID ${data[i].userId}: ${data[i].title}`; 
            mainContainer.appendChild(div);
        }
    }