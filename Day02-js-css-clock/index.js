setInterval(setClock, 1000)

function setClock () {
  const $secondHand = document.querySelector(".second-hand")
  const $minuteHand = document.querySelector(".minute-hand")
  const $hourHand = document.querySelector(".hour-hand")
  const $infoDate = document.querySelector(".date")

  const dateNow = new Date()
  const secondDegrees = dateNow.getSeconds() / 60
  const minuteDegrees = (secondDegrees + dateNow.getMinutes()) / 60
  const HourDegrees = (minuteDegrees + dateNow.getHours()) / 12

  $infoDate.textContent= `
    ${dateNow.getHours() <= 9 ? 
      "0"+dateNow.getHours(): dateNow.getHours()}:${dateNow.getMinutes() <= 9 ? 
        "0"+dateNow.getMinutes(): dateNow.getMinutes()} 
    ${dateNow.toDateString()}`
    
  setRotation($secondHand, secondDegrees)
  setRotation($minuteHand, minuteDegrees)  
  setRotation($hourHand, HourDegrees)


}
function setRotation(element, rotationDegrees) {
  element.style.transform = `rotate(${rotationDegrees*360}deg)`
}





