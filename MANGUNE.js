const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (form.checkValidity()) {
        alert("Form Submission Successful!");
    } else {
        alert("Please fill out the form correctly.");
    }
});