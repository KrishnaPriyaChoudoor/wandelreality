/*import "./style.css";*/ // uncommment for vite mode

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  menuToggle?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("hidden");
  });

  const navLinks = mobileMenu?.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
});

window.togglePastEvents = function (event) {
  const pastSection = document.getElementById("past-events");
  const isHidden = pastSection.classList.contains("hidden");
  pastSection.classList.toggle("hidden");

  event.currentTarget.textContent = isHidden
    ? "Hide Past Events"
    : "View Past Events";
};
