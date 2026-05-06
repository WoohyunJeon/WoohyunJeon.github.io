window.addEventListener('scroll', () => {
  // Navbar shrink on scroll
  const navbar = document.getElementById("navbar");
  if (navbar) {
    if (window.scrollY > 28.5) { // Use window.scrollY for consistency
      navbar.style.padding = "10px 10px";
    } else {
      navbar.style.padding = "28px 10px";
    }
  }

  // Title container fade-out on scroll (for pages like Course Content and Portfolio)
  const titleContainer = document.getElementById('titleContainer');
  if (titleContainer) {
    if (window.scrollY > 50) { // Adjust threshold as needed
      titleContainer.classList.add('hidden');
    } else {
      titleContainer.classList.remove('hidden');
    }
  }
});