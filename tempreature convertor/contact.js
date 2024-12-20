document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        document.getElementById('formResult').innerText = `Thank you, ${name}! Your message has been sent.`;
        document.getElementById('contactForm').reset(); // Reset the form
    } else {
        document.getElementById('formResult').innerText = "Please fill in all fields.";
    }
});