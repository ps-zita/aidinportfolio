const audioPlayers = document.querySelectorAll('.audio-player');

audioPlayers.forEach((player, index) => {
    const audio = player.querySelector('audio');
    const playPauseButton = player.querySelector('.play-pause');
    const progress = player.querySelector('.progress');

    playPauseButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    audio.addEventListener('timeupdate', () => {
        progress.value = (audio.currentTime / audio.duration) * 100;
    });

    progress.addEventListener('input', () => {
        audio.currentTime = (progress.value / 100) * audio.duration;
    });
});

const videoPlayer = document.getElementById('video-player');
const videoPlayPauseButton = document.getElementById('video-play-pause');
const videoProgress = document.getElementById('video-progress');

videoPlayPauseButton.addEventListener('click', () => {
    if (videoPlayer.paused) {
        videoPlayer.play();
        videoPlayPauseButton.textContent = 'Pause';
    } else {
        videoPlayer.pause();
        videoPlayPauseButton.textContent = 'Play';
    }
});

videoPlayer.addEventListener('timeupdate', () => {
    videoProgress.value = (videoPlayer.currentTime / videoPlayer.duration) * 100;
});

videoProgress.addEventListener('input', () => {
    videoPlayer.currentTime = (videoProgress.value / 100) * videoPlayer.duration;
});