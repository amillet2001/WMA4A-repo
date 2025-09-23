
function showMessage(event){
    event.preventDefault();

    const username = document.getElementById('username').value;

    window.alert("Welcome " + username + ". You are Logged In");
}