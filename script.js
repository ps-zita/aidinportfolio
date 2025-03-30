// Audio Players Functionality
const playIcon = "assets/play.png";
const pauseIcon = "assets/pause.png";

const audioPlayers = document.querySelectorAll('.audio-player');

audioPlayers.forEach(player => {
  const audio = player.querySelector('audio');
  const playPauseButton = player.querySelector('.play-pause');
  const progress = player.querySelector('.progress');
  const timeDisplay = player.querySelector('.time-display');

  // Set initial icon
  playPauseButton.innerHTML = `<img src="${playIcon}" alt="play" class="icon">`;

  playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playPauseButton.innerHTML = `<img src="${pauseIcon}" alt="pause" class="icon">`;
    } else {
      audio.pause();
      playPauseButton.innerHTML = `<img src="${playIcon}" alt="play" class="icon">`;
    }
  });

  audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
      let percentage = (audio.currentTime / audio.duration) * 100;
      if (percentage > 100) percentage = 100;
      progress.value = percentage;
      updateTimeDisplay(audio, timeDisplay);
      updateProgressBar(progress, percentage);
    }
  });

  progress.addEventListener('input', () => {
    if (audio.duration) {
      audio.currentTime = (progress.value / 100) * audio.duration;
    }
  });
});

// FAQ Accordion Functionality with animation
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});

// Update utility functions
function updateTimeDisplay(mediaElement, displayElement) {
  const currentTime = formatTime(mediaElement.currentTime);
  const duration = formatTime(mediaElement.duration);
  displayElement.textContent = `${currentTime} / ${duration}`;
}

function formatTime(seconds) {
  if (isNaN(seconds) || seconds === Infinity) {
    return "0:00";
  }
  const minutes = Math.floor(seconds / 60);
  const secondsRemaining = Math.floor(seconds % 60);
  return `${minutes}:${secondsRemaining.toString().padStart(2, '0')}`;
}

function updateProgressBar(progressElement, percentage) {
  progressElement.style.background = `linear-gradient(90deg, black ${percentage}%, white ${percentage}%, white 100%)`;
}