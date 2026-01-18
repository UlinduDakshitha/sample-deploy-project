function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        document.getElementById("message").innerHTML = "Login successful!";
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").innerHTML = "Invalid username or password!";
        document.getElementById("message").style.color = "red";
    }
}