const inputs = document.querySelectorAll("input")
const values = document.querySelectorAll(".value")
const text = document.querySelector(".hl")
function changeInput () {
  const sufix = this.dataset.sizing || ""
  if (this.name === "padd") {
    values[0].textContent = this.value
  } else if (this.name === "blur") {
    values[1].textContent = this.value
  } else if (this.name === "base") {
    values[2].textContent = this.value
  }
  
  const root = document.documentElement
  root.style.setProperty(`--${this.name}`, `${this.value}${sufix}`)
}

inputs.forEach(input => input.addEventListener("change", changeInput))
inputs.forEach(input => input.addEventListener("mousemove", changeInput))
