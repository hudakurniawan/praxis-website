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
  // === Load Header ===
   const headerContainer = document.getElementById("header");
  if (headerContainer) {
    fetch("component/header.html")
      .then((res) => res.text())
      .then((data) => {
        headerContainer.innerHTML = data;

        // Setelah header dimuat → baru pasang event listener

        // Mobile menu toggle
        const mobileMenuBtn = headerContainer.querySelector("#mobileMenuBtn");
        const mainNav = headerContainer.querySelector("#mainNav");

        if (mobileMenuBtn && mainNav) {
          mobileMenuBtn.addEventListener("click", function () {
            mainNav.classList.toggle("active");
          });
        }

        // Tutup menu saat klik link
        headerContainer.querySelectorAll(".nav-menu a").forEach((link) => {
          link.addEventListener("click", function () {
            mainNav.classList.remove("active");
          });
        });

        // Highlight active menu
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const navLinks = headerContainer.querySelectorAll(".nav-menu a");

        navLinks.forEach((link) => {
          if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
          }
        });
      })
      .catch((err) => console.error("Error loading header:", err));
  }
});
