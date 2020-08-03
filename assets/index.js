import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const buttonPlay = document.getElementById("buttonPlay");
const buttonMute = document.getElementById("buttonMute");

const player = new MediaPlayer({
    el: video,
    plugins: [
        // new AutoPlay()
    ]
});

buttonPlay.onclick = () => player.handlePlayClick();
buttonMute.onclick = () => player.handleMuteClick();
