// 🔹 Hide loader on window load
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

// 🔹 Smooth scroll to #welcome when any .menu a is clicked, and handle active class
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

// 🔹 Scroll to songs section
function scrollToSongs(e) {
  e.preventDefault();
  const songsSection = document.getElementById("songs");
  if (songsSection) {
    songsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// 🔹 Theme mode buttons (assuming buttons exist in HTML)
document.addEventListener("DOMContentLoaded", function () {
  const darkBtn = document.getElementById('dark-mode-btn');
  const lightBtn = document.getElementById('light-mode-btn');
  const normalBtn = document.getElementById('normal-mode-btn');
  const themeLink = document.getElementById('theme-style');

  if (darkBtn && themeLink) {
    darkBtn.addEventListener('click', function () {
      themeLink.href = 'dark.css';
    });
  }
  if (lightBtn && themeLink) {
    lightBtn.addEventListener('click', function () {
      themeLink.href = 'light.css';
    });
  }
  if (normalBtn && themeLink) {
    normalBtn.addEventListener('click', function () {
      themeLink.href = 'style.css';
    });
  }
});

// JavaScript: Clock update function (from previous code, integrated)
function updateClock() {
    const now = new Date();
    let h = now.getHours();
    const m = String(now.getMinutes()).padStart(2, '0');
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    const clockEl = document.getElementById('clock');
    if (clockEl) {
        clockEl.textContent = `${h}:${m} ${ampm}`;
    }
}

setInterval(updateClock, 1000);
updateClock(); // Initial call on load


// 🔹 Greeting popup based on time (consolidated function)
function getGreetingMessage() {
  const now = new Date();
  const hour = now.getHours();
  if (hour >= 5 && hour < 12) {
    return "සුභ උදැසනක්..!";
  } else if (hour >= 12 && hour < 18) {
    return "සුභ දහවලක්...!";
  } else {
    return "සුභ රාත්‍රියක්...!";
  }
}

// 🔹 Show greeting popup on page load (consolidated)
window.addEventListener('load', function() {
  const popup = document.getElementById('greetingPopup') || document.getElementById('greeting-box');
  if (popup) {
    popup.textContent = getGreetingMessage();
    popup.classList.add('show');
    // Remove class after animation
    setTimeout(() => {
      popup.classList.remove('show');
    }, 5000); // 4s show + 1s fade
  }
});

// 🔹 Navigation links smooth scroll (consolidated)
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      // Remove 'active' class from all links
      navLinks.forEach(l => l.classList.remove("active"));
      // Add 'active' class to clicked link
      this.classList.add("active");
      // Smooth scroll to target section
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});

