// 🔹 Hide loader on window load
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

// 🔹 Smooth scroll to #welcome when any .menu a is clicked
document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu a");
  const welcomeSection = document.getElementById("welcome");

  menuLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove 'active' from all menu links
      menuLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");

      // Scroll to welcome section
      if (welcomeSection) {
        welcomeSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});

// 🔹 Scroll to top when #home link is clicked
document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.querySelector('a[href="#home"]');
  if (homeLink) {
    homeLink.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

// 🔹 Search input interaction
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("keyup", function (e) {
      const query = e.target.value.trim();
      if (query.length > 2) {
        console.log(`Searching for: ${query}`);
        // Add live filtering or fetch logic here
      }
    });
  }
});

// 🔹 User options interaction
document.addEventListener("DOMContentLoaded", function () {
  const userLinks = document.querySelectorAll(".user-options a");
  userLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      // You can add redirect logic here if needed
    });
  });
});

  function scrollToSongs(e) {
    e.preventDefault();
    document.getElementById("songs").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
  document.getElementById('dark-mode-btn').addEventListener('click', function () {
  document.getElementById('theme-style').href = 'dark.css';
});

document.getElementById('light-mode-btn').addEventListener('click', function () {
  document.getElementById('theme-style').href = 'light.css';
});
document.getElementById('normal-mode-btn').addEventListener('click', function () {
  document.getElementById('theme-style').href = 'style.css';
});
function updateClock() {
  const now = new Date();
  let h = now.getHours();
  const m = String(now.getMinutes()).padStart(2, '0');
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  document.getElementById('clock').textContent = `${h}:${m} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();


document.getElementById('searchInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const query = e.target.value;
    searchYouTubeMusic(query);
  }
});

const API_KEY = '' ;

function searchYouTubeMusic(query) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(query)}&key=${API_KEY}&maxResults=10`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = '';
      data.items.forEach(item => {
        const videoId = item.id.videoId;
        const title = item.snippet.title;
        const thumbnail = item.snippet.thumbnails.default.url;

        resultsDiv.innerHTML += `
          <div class="video-result">
            <img src="${thumbnail}" alt="${title}">
            <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">${title}</a>
          </div>
        `;
      });
    })
    .catch(error => console.error('Error fetching YouTube data:', error));
}








