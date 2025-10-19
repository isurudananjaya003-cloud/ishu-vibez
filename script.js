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

