const database = firebase.database().ref();

const titleInput = document.getElementById("title");
const usernameInput = document.getElementById("author");
const blogInput = document.getElementById("content");
const sendButton = document.getElementById("sendBtn");

sendButton.onclick = updateDB;

function updateDB(event) {
    event.preventDefault();
    const row = {
        TITLE: titleInput.value,
        AUTHOR: usernameInput.value,
        CONTENT: blogInput.value
    };

    database.push(row);
}