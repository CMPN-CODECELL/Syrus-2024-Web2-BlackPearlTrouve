document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your login authentication logic here
    // For demonstration, let's just log the credentials
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log('Username:', username);
    console.log('Password:', password);
});


//for signup
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your signup logic here
    // For demonstration, let's just log the entered data
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Full Name:', fullname);
    console.log('Email:', email);
    console.log('Password:', password);
});