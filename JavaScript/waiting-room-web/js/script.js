
let play = document.getElementById("play")
function playMusic(){
  let audio = new Audio("sound/elevator-music.mp3");
    audio.play()
    play.loop = true
}
play.addEventListener("click", playMusic);

play_form.addEventListener('click', () => {
  if (audio.playMusic) {
    play.removeAttribute('disabled');
  } else {
    play.setAttribute('disabled', 'disabled');
  }
});