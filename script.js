const wrapper = document.querySelector(".wrapper"),
  musicImg = wrapper.querySelector(".img-area img"),
  musicName = wrapper.querySelector(".song-details .name"),
  musicArtist = wrapper.querySelector(".song-details .artist"),
  mainAudio = wrapper.querySelector("#main-audio"),
  playpauseBtn = wrapper.querySelector(".play-pause"),
  prevBtn = wrapper.querySelector("#prev"),
  next = wrapper.querySelector("#next");
progressBar = wrapper.querySelector(".progress-bar");
progressarea = wrapper.querySelector(".progress-area"),
MusicList=wrapper.querySelector(".music-list")
showMoreBtn = wrapper.querySelector("#more-music"),
HideMoreBtn = wrapper.querySelector("#close");


showMoreBtn.addEventListener("click",()=>{
  MusicList.classList.toggle("show")
})

let musicIndex = 5;

window.addEventListener("load", () => {
  loadMusic(musicIndex);
});
function loadMusic(indexNumb) {
  musicName.innerHTML = allMusic[indexNumb - 1].name;
  musicArtist.innerHTML = allMusic[indexNumb - 1].artist;
  musicImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
  mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
}

//play music function
function playMusic() {
  wrapper.classList.add("paused");
  playpauseBtn.querySelector("i").innerHTML = "pause";
  mainAudio.play();
}
function pauseMusic() {
  wrapper.classList.remove("paused");
  playpauseBtn.querySelector("i").innerHTML = "play_arrow";
  mainAudio.pause();
}
function nextm() {
  musicIndex++;
  musicIndex > allMusic.length ? (musicIndex = 1) : (musicIndex = musicIndex);
  loadMusic(musicIndex);
  playMusic();
}
function prv() {
  musicIndex--;
  musicIndex < 1 ? (musicIndex = allMusic.length) : (musicIndex = musicIndex);
  loadMusic(musicIndex);
  playMusic();
}

playpauseBtn.addEventListener("click", () => {
  const isMusicPaused = wrapper.classList.contains("paused");
  isMusicPaused ? pauseMusic() : playMusic();
});

next.addEventListener("click", () => {
  nextm();
});
prevBtn.addEventListener("click", () => {
  prv();
});
mainAudio.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let progressWidth = (currentTime / duration) * 100;
  progressBar.style.width = `${progressWidth}%;`;
  let musicCurrentTime = wrapper.querySelector(".current"),
    musicDurration = wrapper.querySelector(".duration");
  mainAudio.addEventListener("loadeddata", () => {
    //update song total duration

    let audioDuration = mainAudio.duration;
    let totalMin = Math.floor(audioDuration / 60);
    let totalsec = Math.floor(audioDuration % 60);

    if (totalsec < 10) {
      totalsec = `0${totalsec}`;
    }
    musicDurration.innerHTML = `${totalMin}:${totalsec}`;
  });
  let CurrentMin = Math.floor(currentTime / 60);
  let Currentsec = Math.floor(currentTime % 60);
  if (Currentsec < 10) {
    Currentsec = `0${Currentsec}`;
  }
  musicCurrentTime.innerHTML = `${CurrentMin}:${Currentsec}`;
});
progressarea.addEventListener("click", () => {
  let progressWidthval = progressarea.clientWidth;
  let clickedofSetX = e.offsetX;
  let songDuration = mainAudio.duration;

  mainAudio.currentTime = (clickedofSetX / progressWidthval) * songDuration;
  playMusic();
});
const reapetBtn = wrapper.querySelector("#repeat_one");
reapetBtn.addEventListener("click", () => {
  let getText = reapetBtn.innerText;
  switch (getText) {
    case "repeat":
      reapetBtn.innerText = "repeat_one";
      reapetBtn.setAttribute(" title","Song looped");
      break;
    case "repeat_one":
      reapetBtn.innerText = "shuffle";
      reapetBtn.setAttribute(" title","Play shuffle");
      break;
    case "shuffle":
      reapetBtn.innerText = "repeat";
      reapetBtn.setAttribute(" title","Playlist looped ")
      break;
  }
});


mainAudio.addEventListener("ended",()=>{

let getText=rea.innerText;

switch (getText) {
  case "repeat":
    nextm();
    break;
  case "repeat_one":
 mainAudio.currentTime=0;
 loadMusic(indexNumb);
 playMusic()
    break;
  case "shuffle":
 let randIndex=Math.floor((Math.random()*allMusic.length)+1);
 do{
  let randIndex=Math.floor((Math.random()*allMusic.length)+1);
 }while(musicIndex=randIndex)
 musicIndex=randIndex;
 loadMusic(musicIndex);
 playMusic();
 playingSong()
    break;
}
});








//show music list onclick of music icon
