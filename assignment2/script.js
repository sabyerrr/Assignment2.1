document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");
    const buttonContainer = document.getElementById("buttonContainer"); // Wrapper for both buttons

    function hideButtons() {
        buttonContainer.style.display = "none"; // Hides the entire button container
    }

    function showButtons() {
        buttonContainer.style.display = "flex"; // Shows the button container again
    }

    window.toggleRegisterForm = function () {
        if (registerForm.style.display === "none" || registerForm.style.display === "") {
            registerForm.style.display = "block";
            loginForm.style.display = "none"; // Hide login form when registering
            hideButtons();
        }
    };

    window.toggleLoginForm = function () {
        if (loginForm.style.display === "none" || loginForm.style.display === "") {
            loginForm.style.display = "block";
            registerForm.style.display = "none"; // Hide register form when logging in
            hideButtons();
        }
    };

    window.closeForms = function () {
        registerForm.style.display = "none";
        loginForm.style.display = "none";
        showButtons();
    };
});
