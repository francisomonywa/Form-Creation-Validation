document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("registration-form"); // Form Selection
    const feedbackDiv = document.getElementById("form-feedback"); // Feedback Division Selection


    //* Form Submission Event Listener
    form.addEventListener("submit", function(event) {
        event.preventDefault() // prevent the form from submitting to the server

        //Todo: Retrieve User Inputs
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();


        //* Validation Logic

        //Todo: Initialize Validation Variables
        let isValid = true;
        let messages = []


        //Todo: Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Invalid username");
        }


        //Todo: Email Validation
        const email_pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!email_pattern.test(email)) {
            isValid = false
            messages.push("Invalid email")
        }

        //Todo: Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Invalid password")
        }


        //* Feedback Display Logic
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!"
            feedbackDiv.style.color = "#28a745"
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    })

})