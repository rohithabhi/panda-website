const names = ["Panda🐼", "P4nda", "PΛИDΛ", "𝙿𝙰𝙽𝙳𝙰"];
let nameIndex = 0, charIndex = 0;
let isDeleting = false;
const textEl = document.getElementById("typed-text");

function typeEffect() {
  let current = names[nameIndex];
  if (isDeleting) {
    charIndex--;
    textEl.textContent = current.substring(0, charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      nameIndex = (nameIndex + 1) % names.length;
    }
  } else {
    charIndex++;
    textEl.textContent = current.substring(0, charIndex);
    if (charIndex === current.length) {
      isDeleting = true;
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 120);
}
typeEffect();

// Sidebar toggle
const sidebar = document.getElementById("sidebar");
const toggle = document.getElementById("menu-toggle");
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
    sidebar.classList.remove("open");
  }
});
