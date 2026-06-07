function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error-msg").innerHTML = "Wrong username or password!";
    }
}
function logout() {
    window.location.href = "index.html";
}