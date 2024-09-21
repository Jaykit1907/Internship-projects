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