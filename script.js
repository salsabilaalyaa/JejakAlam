const audioPlayer = document.getElementById('audioPlayer');
const btnAudio = document.getElementById('btnAudio');

btnAudio.addEventListener('click', () => {
    if (audioPlayer.paused) {
    audioPlayer.play();
    btnAudio.textContent = 'Jeda Suara';
    } else {
    audioPlayer.pause();
    btnAudio.textContent = 'Putar Suara';
    }
});

const videoPlayer = document.getElementById('videoPlayer');
const btnVideo = document.getElementById('btnVideo');

btnVideo.addEventListener('click', () => {
    if (videoPlayer.paused) {
    videoPlayer.play();
    btnVideo.textContent = 'Jeda Video';
    } else {
    videoPlayer.pause();
    btnVideo.textContent = 'Play Video';
    }
});