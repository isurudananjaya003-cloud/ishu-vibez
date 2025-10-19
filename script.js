            window.addEventListener("load", function () {
            document.getElementById("loader").style.display = "none";
        });


        document.addEventListener("DOMContentLoaded", function() {
        const navLinks = document.querySelectorAll("nav a");
    
        navLinks.forEach(link => {
            link.addEventListener("click", function(event) {
                event.preventDefault();
    
                // Remove 'active' class from all links
                navLinks.forEach(link => link.classList.remove("active"));
    
                // Add 'active' class to clicked link
                this.classList.add("active");
    
                // Smooth scroll to target section
                const targetId = this.getAttribute("href");
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            });
        });
    });
                document.addEventListener("DOMContentLoaded", function() {
                const homeLink = document.querySelector('a[href="#home"]');
            
                homeLink.addEventListener("click", function(event) {
                    event.preventDefault(); // default jump avoid
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                });
            });

              document.querySelectorAll('.menu a').forEach(btn => {
                btn.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelectorAll('.menu a').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                alert(`Loading ${this.textContent.trim()}...`);
                });
            });

            document.querySelectorAll('.user-options a').forEach(btn => {
                btn.addEventListener('click', function(e) {
                e.preventDefault();
                alert(`Redirecting to ${this.textContent.trim()}...`);
                });
            });

            // Activate clicked menu item
document.querySelectorAll('.menu a').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.menu a').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    alert(`Loading ${this.textContent.trim()} songs...`);
  });
});

// Search input interaction
document.getElementById('searchInput').addEventListener('keyup', function(e) {
  const query = e.target.value.trim();
  if (query.length > 2) {
    console.log(`Searching for: ${query}`);
    // You can add live filtering or fetch results here
  }
});

// User options
document.querySelectorAll('.user-options a').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    alert(`Redirecting to ${this.textContent.trim()}...`);
  });
});
  document.querySelectorAll('.menu a').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelectorAll('.menu a').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });





