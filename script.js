document.getElementById("contact-form").addEventListener("submit", function (e)
{
    e.preventDefault();
    alert("Thank you for contacting me!")
})

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