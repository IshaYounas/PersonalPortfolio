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

// dynamically showing the project I have worked on
const projectsData = [
  {
    title: "Encoding Words Suffixes",
    description: "A command-line Java application that encodes and decodes large text files using a CSV-based word-to-number dictionary. Demonstrates file I/O, Java Collections, Big-O analysis.",
    url: "https://github.com/IshaYounas/EncodingWordsSuffixes"
  },

  {
    title: "Card Game War",
    description: "A C-based simulation of the classic 'War' card game with multi-player support, and structured data types for clean and efficient logic.",
    url: "https://github.com/IshaYounas/CardGameWar"
  },

  {
    title: "Wordle Game",
    description: "A two-player desktop version of the Wordle game developed in C#. Features user input validation, scoring logic, and a replay system in a Windows and Android Forms interface.",
    url: "https://github.com/IshaYounas/WordleGame"
  },

  {
    title: "Triva Time App",
    description: "An interactive Ionic Angular mobile/web app that fetches trivia questions from an API, tracks user scores, and saves quiz attempts with geolocation using Capacitor Plugins.",
    url: "https://github.com/IshaYounas/TriviaTimeApp"
  },

  {
    title: "Fleet Manager",
    description: "A console-based fleet management system written in C. Utilizes singly linked lists to manage machinery records, including add, update, delete, display, sorting by valuation, statistics generation, login authentication, and file I/O operations. Designed for efficient data handling and real-world application logic.",
    url: "https://github.com/IshaYounas/FleetManagerC"
    },
];

const projectsList = document.getElementById("projects-list");

projectsData.forEach(proj => {
  const projDiv = document.createElement("div");
  projDiv.classList.add("project");

  projDiv.innerHTML = `
    <h3>${proj.title}</h3>
    <p>${proj.description}</p>
    <a href="${proj.url}" target="_blank">View on GitHub</a>
  `;

  projectsList.appendChild(projDiv);
});