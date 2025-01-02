// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Menu di-Klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar Menu, untuk menutup sidebar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Search
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const menuItems = document.querySelectorAll('.menu-card');

  searchInput.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();

    menuItems.forEach(item => {
      const name = item.dataset.name.toLowerCase();
      if (name.includes(query)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
