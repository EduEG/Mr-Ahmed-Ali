// Hamburger menu open/close
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menu-toggle');
const sidebarOverlay = document.getElementById('sidebar-overlay');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  sidebarOverlay.classList.toggle('open');
});
sidebarOverlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  sidebarOverlay.classList.remove('open');
});

// Dropdowns for grades
document.querySelectorAll('.grade-toggle').forEach(toggleBtn => {
  toggleBtn.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);

    // Close others for cleaner UX
    document.querySelectorAll('.grade-toggle').forEach(btn => {
      if(btn !== this) btn.setAttribute('aria-expanded', 'false');
    });
  });
});

// Highlight current submenu link if url matches
const page = window.location.pathname.split('/').pop();
document.querySelectorAll('.submenu a').forEach(link => {
  if(link.getAttribute('href') === page) link.classList.add('active');
});

// Close menu when clicking a sidebar link
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('open');
    document.querySelectorAll('.grade-toggle').forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
    });
  });
});

// Accessibility: close sidebar on ESC
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('open');
    document.querySelectorAll('.grade-toggle').forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
    });
  }
});