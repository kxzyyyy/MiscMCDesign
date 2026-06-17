document.addEventListener('DOMContentLoaded', function() {
  const fallingStarsContainer = document.createElement('div');
  fallingStarsContainer.className = 'falling-stars';
  for (let i = 0; i < 30; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    fallingStarsContainer.appendChild(star);
  }
  document.body.insertBefore(fallingStarsContainer, document.body.firstChild);

  const serverIpElement = document.querySelector('.navigation__server-ip');
  if (serverIpElement) {
    serverIpElement.addEventListener('click', function() {
      const serverIp = 'miscmc.net';
      navigator.clipboard.writeText(serverIp).then(function() {
        const originalText = serverIpElement.innerHTML;
        serverIpElement.innerHTML = 'Copied!';
        setTimeout(function() {
          serverIpElement.innerHTML = originalText;
        }, 1500);
      });
    });
  }

  async function updatePlayerCount() {
    const playerWidgetText = document.querySelector('.player-widget__text');
    if (!playerWidgetText) return;

    try {
      const response = await fetch('https://api.mcsrvstat.us/2/miscmc.net');
      const data = await response.json();
      
      if (data.players && data.players.online !== undefined) {
        playerWidgetText.textContent = data.players.online + ' Players Online';
      }
    } catch (error) {
      console.error('Failed to fetch player count:', error);
    }
  }

  updatePlayerCount();
  setInterval(updatePlayerCount, 60000);
});
