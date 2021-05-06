// Events of Keyboard
window.addEventListener("keydown", playEvents)
window.addEventListener("keyup", stopEvents)


// keydown function to add class and play de audio
function playEvents (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
  if(!key) {return}
  key.classList.add("event")
  audio.currentTime = 0
  audio.play()
}

// key up function to remove class 
function stopEvents (e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
  if(!key) {return}
  key.classList.remove("event")
}