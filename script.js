document.getElementById("contact-form").addEventListener("submit", function (e)
{
    e.preventDefault();

    emailjs.sendForm('service_123', 'template_6ui2b89', this)
    .then(() => {
        alert("Thank you for contacting me!");
        this.reset();
    }, (error) => {
        console.error("EmailJS Error:", error)
        alert("Failed to send: " + (error.text || JSON.stringify(error)));
    });
});

// storing in a nodelist
const sections = document.querySelectorAll("section");

// creating an observer to watch the sections when user can see them
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // section being at least 10% visible
            entry.target.classList.add("visible"); // making it appear
        }
    });
}, {threshold: 0.1}) // 10% visible

sections.forEach(section => {
    observer.observe(section) // watch the section
});