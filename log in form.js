function validateLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email.");
        return false;
    }

    if (email === "seandump901@gmail.com" && password === "sean22") {
        window.location.href = "welcome.html";
        return true;
    } else {
        alert("Invalid credentials. Please try again.");
        return false;
    }
}