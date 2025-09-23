function login(event){ 
  event.preventDefault();

    var user = document.getElementById("emailUn").value;
    var pass = document.getElementById("password").value;

    if(user === "" || pass === ""){
        alert("Please fill in both fields.");
    } else if((user === "denver" || user === "minamarkdenver@gmail.com") && pass === "den1234"){
        alert("Login successful!");
    } else {
        alert("Wrong username/email or password.");
    }
}
