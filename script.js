
const hovercat = document.getElementById('hovercat');
const hoverdog = document.getElementById('hoverdog');
const audio = document.getElementById('audio');

// Add event listeners to the div
hovercat.addEventListener('mouseenter', () => {
  // Set the audio source dynamically
  audio.src = '/audio/cat.wav';
console
  // Play the audio
  audio.play();
});

hovercat.addEventListener('mouseleave', () => {
  // Pause the audio
  audio.pause();
});

// Add event listeners to the div
hoverdog.addEventListener('mouseenter', () => {
    // Set the audio source dynamically
    audio.src = '/audio/dog.wav';
  console
    // Play the audio
    audio.play();
  });
  
  hoverdog.addEventListener('mouseleave', () => {
    // Pause the audio
    audio.pause();
  });
  