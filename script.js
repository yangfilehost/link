
document.addEventListener('DOMContentLoaded', function() {
  const copyButton = document.getElementById('copyButton');
  const downloadLink = document.getElementById('downloadLink');
  const copyMessage = document.getElementById('copyMessage');
  
  // Create animated particles for the background
  createParticles();
  
  copyButton.addEventListener('click', function() {
    // Select the text field
    downloadLink.select();
    downloadLink.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy the text inside the text field
    navigator.clipboard.writeText(downloadLink.value)
      .then(() => {
        // Show success message
        copyMessage.style.opacity = '1';
        
        // Hide message after 2 seconds
        setTimeout(() => {
          copyMessage.style.opacity = '0';
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        // Fallback for older browsers
        document.execCommand('copy');
        copyMessage.style.opacity = '1';
        
        setTimeout(() => {
          copyMessage.style.opacity = '0';
        }, 2000);
      });
  });
});

// Function to create animated background particles
function createParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles-container';
  document.body.appendChild(particlesContainer);
  
  // Create 50 particles
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    // Random size
    const size = Math.random() * 5 + 2;
    
    // Random animation duration
    const duration = Math.random() * 20 + 10;
    
    // Random opacity
    const opacity = Math.random() * 0.5 + 0.1;
    
    // Set styles
    particle.style.cssText = `
      position: absolute;
      left: ${posX}%;
      top: ${posY}%;
      width: ${size}px;
      height: ${size}px;
      background-color: rgba(255, 255, 255, ${opacity});
      border-radius: 50%;
      pointer-events: none;
      animation: float ${duration}s linear infinite;
      animation-delay: ${Math.random() * 5}s;
    `;
    
    particlesContainer.appendChild(particle);
  }
}
