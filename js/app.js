const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progressBar');
const cover = document.getElementById('cover');
const coverImage = document.getElementById('coverImage');
const title = document.getElementById('title');

const tracks = [
  {
    title: 'Indila - Love Story ',
    src: './mp3/Indila - Love Story (3).mp3',
    cover: '.images/Indila - love story.jpg',
  },
  {
    title: 'Есенин',
    src: './mp3/Есенин.mp3',
    cover: '.images/Есенин.jpg',
  },
  {
    title: 'На Грани',
    src: './mp3/На Грани.mp3',
    cover: '.images/На Грани.jpg',
  },
];

let currentTrack = 0;
let isPlaying = false;

function loadTrack(index) {
  const track = tracks[index];
  title.textContent = track.title;
  audio.src = track.src;
  coverImage.src = track.cover;
}

function playPause() {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.textContent = 'Play';
    cover.style.animationPlayState = 'paused';
  } else {
    audio.play();
    playPauseBtn.textContent = 'Pause';
    cover.style.animationPlayState = 'running';
  }
  isPlaying = !isPlaying;
}

function prevTrack() {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrack);
  if (isPlaying) audio.play();
}

function nextTrack() {
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack(currentTrack);
  if (isPlaying) audio.play();
}

function updateProgress() {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = percent + '%';
}

audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextTrack);
playPauseBtn.addEventListener('click', playPause);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);

loadTrack(currentTrack);