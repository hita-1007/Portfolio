document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('Ult5j_1E9AMmw5_kf'); // Replace with your EmailJS user ID

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const form = event.target;

        emailjs.sendForm('service_on3ib4e', 'template_phpuwur', form)
            .then(function (response) {
                alert('Message sent successfully!');
                form.reset();
            }, function (error) {
                alert('Failed to send message.');
                console.error('Error:', error);
            });
    });
});
