function updateOnlineStatus() {
    const offlineMessage = document.getElementById('offlineMessage');
    if (navigator.onLine) {
      offlineMessage.style.display = 'none';
    } else {
      offlineMessage.style.display = 'block';
    }
  }

  // Initial check
  updateOnlineStatus();

  // Listen for online/offline events
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);


  
  const navItems = document.querySelectorAll('.nav-item a');

  // Get the current URL and find the page name (e.g., index.html)
  const currentPage = window.location.pathname.split("/").pop();
  
  navItems.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
          link.parentElement.classList.add('active');
      }
  });
  