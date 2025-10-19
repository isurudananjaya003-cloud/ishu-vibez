// 🔹 Hide loader on window load
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

// 🔹 DOM Ready
document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu a");
  const userLinks = document.querySelectorAll(".user-options a");
  const allButtons = [...menuLinks, ...userLinks]; // combine both sets
  const allSections = document.querySelectorAll(".content-section1");
  const welcomeSection = document.getElementById("welcome");

  allButtons.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove 'active' from all menu links
      menuLinks.forEach(link => link.classList.remove("active"));
      if (this.closest(".menu")) {
        this.classList.add("active");
      }

      // Hide all content sections
      allSections.forEach(section => section.classList.remove("active"));

      // Show target section
      const targetId = this.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add("active");
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      // Scroll to welcome section (only for menu links)
      if (this.closest(".menu") && welcomeSection) {
        welcomeSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // 🔹 Scroll to top when #home link is clicked
  const homeLink = document.querySelector('a[href="#home"]');
  if (homeLink) {
    homeLink.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 🔹 Search input interaction
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
