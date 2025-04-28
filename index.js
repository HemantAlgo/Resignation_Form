document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = "Invalid email format";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters, with 1 uppercase, 1 number, and 1 special character";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    let confirmPassword = document.getElementById("confirmpassword").value;
    let confirmPasswordError = document.getElementById("confirmPasswordError");
    if (confirmPassword !== password) {
        confirmPasswordError.textContent = "Passwords do not match";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    let age = document.getElementById("age").value;
    let ageError = document.getElementById("ageError");
    if (age < 18 || isNaN(age)) {
        ageError.textContent = "You must be at least 18 years old";
        isValid = false;
    } else {
        ageError.textContent = "";
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});
