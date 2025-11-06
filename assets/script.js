// Get current page path (like "/export/index.html")
const currentPage = window.location.pathname;

// Loop through all nav links
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.href.includes(currentPage)) {
    link.classList.add('active');
  }
});
