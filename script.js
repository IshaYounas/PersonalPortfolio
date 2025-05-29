document.getElementById("contact-form").addEventListener("submit", function (e)
{
    e.preventDefault();

    emailjs.sendForm('service_123', 'template_6ui2b89', this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    }, (error) => {
      console.error('Failed to send message:', error);
      alert("Failed to send message. Try again later.");
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

  {
    title: "Game Nation",
    description: "A mini-game platform with 5 games, user login, local storage, and alerts.",
    link: "https://github.com/IshaYounas/GameNationProject"
  }
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

document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const article = button.closest('article');
    const fullContent = article.querySelector('.full-content');
    const preview = article.querySelector('.preview');

    // read more button is pressed
    if (fullContent.style.display === 'none') { 
      fullContent.style.display = 'block'; // full content is displaying
      preview.style.display = 'none';
      button.textContent = 'Show Less';
      button.setAttribute('aria-expanded', 'true');
    } // if

    // read more button is NOT pressed
    else {
      fullContent.style.display = 'none';
      preview.style.display = 'block'; // preview is displaying
      button.textContent = 'Read More';
      button.setAttribute('aria-expanded', 'false');
    }
  });
});

window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});

const toggleBtn = document.getElementById('dark-mode-toggle');

// loading theme from localStorage if available
// dark mode version
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = 'Light Mode';
} 

// light mode version
else {
    toggleBtn.textContent = 'Dark Mode';
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    const isDark = document.body.classList.contains('dark-mode');
    toggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

