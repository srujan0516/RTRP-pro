document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting immediately

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirm-password").value.trim();
        const errorMessage = document.getElementById("error-message");

        // Clear previous error messages
        errorMessage.textContent = "";
        errorMessage.style.display = "none";

        // Basic validation
        if (!name || !email || !password || !confirmPassword) {
            errorMessage.textContent = "All fields are required.";
            errorMessage.style.display = "block";
            return;
        }

        if (password.length < 6) {
            errorMessage.textContent = "Password must be at least 6 characters long.";
            errorMessage.style.display = "block";
            return;
        }

        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match.";
            errorMessage.style.display = "block";
            return;
        }

        // Simulate user registration (You can replace this with backend integration)
        alert("Signup successful! Redirecting to login page...");
        window.location.href = "login.html"; // Redirect to login page
    });
});
