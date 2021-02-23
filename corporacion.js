let escuela_btn = document.querySelectorAll(".escuela-btn")[0]
let equipo_btn = document.querySelectorAll(".equipo-btn")[0]

let escuela_div = document.getElementById('escuela')
let equipo_div = document.getElementById('equipo')


escuela_btn.addEventListener("click", function() {
  escuela_btn.style.background = "#212121"
  equipo_btn.style.background = "none"

  escuela_div.style.display = "inherit"
  equipo_div.style.display = "none"
})

equipo_btn.addEventListener("click", function() {
  equipo_btn.style.background = "#212121"
  escuela_btn.style.background = "none"

  escuela_div.style.display = "none"
  equipo_div.style.display = "inherit"
})

// escuela_btn.addEventListener("mouseover", function() {
//   escuela_btn.style.background = "#212121"
//
//   setTimeout(function() {
//     escuela_btn.style.background = "none"
//   }, 600)
// })
//
// equipo_btn.addEventListener("mouseover", function(event) {
//   event.target.style.background = "#212121"
//
//   setTimeout(function() {
//     event.target.style.background = "none"
//   }, 600)
// })
