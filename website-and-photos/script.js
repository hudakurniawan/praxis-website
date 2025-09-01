// Remove the sendMail function entirely
// Keep only the mobile menu functionality

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  // === Mobile menu toggle ===
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      document.getElementById("mainNav").classList.toggle("active");
    });
  }

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", function () {
      document.getElementById("mainNav").classList.remove("active");
    });
  });

  // === Load Footer ===
  const footerContainer = document.getElementById("footer");
  if (footerContainer) {
    fetch("component/footer.html")
      .then((res) => res.text())
      .then((data) => {
        footerContainer.innerHTML = data;
      })
      .catch((err) => console.error("Error loading footer:", err));
  }

  // === Load Navbar ===
  const navbarContainer = document.getElementById("navbar");
  if (navbarContainer) {
    fetch("component/navbar.html")
      .then((res) => res.text())
      .then((data) => {
        navbarContainer.innerHTML = data;
      })
      .catch((err) => console.error("Error loading navbar:", err));
  }
});

