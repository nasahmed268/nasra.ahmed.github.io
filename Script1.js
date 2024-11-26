// Function to store form data in local storage
function storeFormData() {
    // Validate form input before storing data
    if (!validateForm()) {
        return; // If validation fails, stop form submission
    }

    if (confirm("Are you sure you want to submit the form?")) {
        // Collecting the form data into an object
        let choiceElement = document.querySelector('input[name="choice"]:checked');
        let choiceValue = choiceElement ? choiceElement.value : '';

        let formData = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
            favcolor: document.getElementById("favcolor").value,
            choice: choiceValue,
            subscribe: document.getElementById("subscribe").checked,
            comments: document.getElementById("comments").value,
        };

        // Store form data as a JSON string
        localStorage.setItem("formData", JSON.stringify(formData));
        alert("Form data has been saved!");
    }
}

// Function to clear form and remove data from storage
function clearForm() {
    if (confirm("Are you sure you want to clear the form? This action cannot be undone.")) {
        document.getElementById("myform").reset(); // Reset form fields to their original values
        localStorage.removeItem("formData"); // Remove form data from local storage
        alert("Form cleared!"); // Alert user that the form has been cleared
    }
}

// Function to validate form data
function validateForm() {
    let errorMessage = document.getElementById("error-message");
    errorMessage.textContent = ""; // Clear any existing messages

    let username = document.getElementById("username").value;  // Get the username
    let password = document.getElementById("password").value; // Get the password
    let choice = document.querySelector('input[name="choice"]:checked'); 
    let comments = document.getElementById("comments").value; // Get the comments

    // Validate username
    if (username === "") {
        errorMessage.textContent = "Username is required.";
        return false;
    }
    if (username.length < 3) {
        errorMessage.textContent = "Username must be at least 3 characters long.";
        return false;
    }

    // Validate password
    if (password === "") {
        errorMessage.textContent = "Password is required.";
        return false;
    }
    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        return false;
    }

    // Validate radio button choice
    if (!choice) {
        errorMessage.textContent = "Please select an option (Option A or Option B).";
        return false;
    }

    // Validate comments field 
    if (comments === "") {
        errorMessage.textContent = "Please enter your comments.";
        return false;
    }

    // If all validations pass, return true
    return true; 
}

// Function to load form data from local storage
function loadFormData() {
    let storedData = localStorage.getItem("formData");
    if (storedData) {
        let formData = JSON.parse(storedData);
        document.getElementById("username").value = formData.username;
        document.getElementById("password").value = formData.password;
        document.getElementById("favcolor").value = formData.favcolor;
        if (formData.choice) {
            document.querySelector(`input[name="choice"][value="${formData.choice}"]`).checked = true;
        }
        document.getElementById("subscribe").checked = formData.subscribe;
        document.getElementById("comments").value = formData.comments;
    }
}
//The right scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // This makes the scrolling smooth
                block: 'start'      // Scroll to the start of the target section
            });
        }
    });
});

// Current section in the navigation area
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSectionId = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSectionId) {
            link.classList.add('active');
        }
    });
});


// Add event listeners on DOM content loaded
document.addEventListener("DOMContentLoaded", function() {
    // Load stored form data when the page loads
    loadFormData();

    // Attach click event listeners for form buttons
    document.getElementById("storeFormDataBtn").addEventListener("click", storeFormData);
    document.getElementById("clearFormBtn").addEventListener("click", clearForm);
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
