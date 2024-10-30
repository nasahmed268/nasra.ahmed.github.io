// Function to store form data in local storage
function storeFormData() {
    // Validate form input before storing data
    if (!validateForm()) {
        return; // If validation fails, stop form submission
    }

    // collecting the form data into an object
    let formData = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        favcolor: document.getElementById("favcolor").value,
        // get the value of the selected radio button, if any
        choice: document.querySelector('input[name="choice"]:checked') ? document.querySelector('input[name="choice"]:checked').value : '',
        subscribe: document.getElementById("subscribe").checked,
        comments: document.getElementById("comments").value,
    };

    // Store form data as a JSON string
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Form data has been saved!");
}

// functions to clear form and remove data from the storage
function clearForm() {
    document.getElementById("myform").reset(); // Reset form fields to their orginal values
    localStorage.removeItem("formData"); // Remove form data from local storage
    alert("Form cleared!"); // Alert user that the form has been cleared
}

// Function to validate form data
function validateForm() {
    let username = document.getElementById("username").value;  // Get the username
    let password = document.getElementById("password").value; // Get the password
    let choice = document.querySelector('input[name="choice"]:checked'); 
    let comments = document.getElementById("comments").value; // Get the comments
    
    // Validate username
    if (username === "") {
        alert("Username is required.");
        return false;
    }
    if (username.length < 3) {
        alert("Username must be at least 3 characters long.");
        return false;
    }

    // validate password
    if (password === "") {
        alert("Password is required.");
        return false;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // Validate button choice 
    if (!choice) {
        alert("Please select an option (Option A or Option B).");
        return false;
    }

    // validate comments field 
    if (comments === "") {
        alert("Please enter your comments.");
        return false;
    }

    // If all validations pass, return true
    return true;
}

