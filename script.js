document.addEventListener("DOMContentLoaded", function () {
    const form  = document.getElementById("registration-form");

    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function (event) {
        event.defaultPrevented();
        const usernameInput = document.getElementById("username").value.trim();
        const userEmail = document.getElementById("email").value.trim();
        const userPassword = document.getElementById("password").value.trim();

        let isValid = true;
        
        const messages = [];

        if (username.length < 3) {
            isValid = false;
            messages.push("username must be at least 3 characters");

        }
        if (!userEmail.includes("@") || userEmail.includes(".")) {
                isValid = false;
                messages.push("enter a valid email address");
            }
        if (userPassword.length < 8) {
            isValid = false;
            messages.push("password must  be at least 8 characters");
        }

        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        }else{
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";

        }
    });


});