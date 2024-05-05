// Initialize Firebase Authentication
var auth = firebase.auth();

// Login form submission event listener
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get email and password from form inputs
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Sign in user with email and password using Firebase Authentication
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User signed in successfully
            const user = userCredential.user;
            console.log('User signed in:', user);
            // Redirect user to dashboard or desired page upon successful login
            window.location.href = 'index.html';
        })
        .catch((error) => {
            // Handle login errors
            const errorMessage = error.message;
            console.error('Login failed:', errorMessage);
            // Display error message to the user (e.g., show it on the login form)
            document.getElementById('login-error').innerText = errorMessage;
        });
});

// Signup form submission event listener
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get full name, email, and password from form inputs
    const fullname = document.getElementById('signup-fullname').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Create user with email and password using Firebase Authentication
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User signed up successfully
            const user = userCredential.user;
            console.log('User signed up:', user);
            // Redirect user to dashboard or desired page upon successful signup
            window.location.href = 'index.html';
        })
        .catch((error) => {
            // Handle signup errors
            const errorMessage = error.message;
            console.error('Signup failed:', errorMessage);
            // Display error message to the user (e.g., show it on the signup form)
            document.getElementById('signup-error').innerText = errorMessage;
        });
});
