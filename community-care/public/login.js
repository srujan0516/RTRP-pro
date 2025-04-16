document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload
        
        // Get input values
        const email = document.querySelector("input[type='email']").value;
        const password = document.querySelector("input[type='password']").value;

        // Dummy authentication (Replace with real backend check)
        if (email && password) {
            // Store login state in localStorage (optional)
            localStorage.setItem("isLoggedIn", "true");

            // Redirect to the second page (home.html)
            window.location.href = "index.html";
        } else {
            alert("Please enter valid credentials.");
        }
    });
});
