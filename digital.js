let videos_btn = document.querySelectorAll(".sala-videos-btn")[0]
let podcast_btn = document.querySelectorAll(".sala-podcast-btn")[0]
let fotos_btn = document.querySelectorAll(".sala-fotos-btn")[0]

let videos_div = document.getElementById('sala-videos')
let podcast_div= document.getElementById('sala-podcast')
let fotos_div = document.getElementById('sala-fotos')


videos_btn.addEventListener("click", function(){
  videos_div.style.display = "inherit"
  podcast_div.style.display = "none"
  fotos_div.style.display = "none"
  console.log('Dando clik a la funcion VIDEOS')
})

podcast_btn.addEventListener("click", function() {
  videos_div.style.display = "none"
  podcast_div.style.display = "inherit"
  fotos_div.style.display = "none"
  console.log('Dando click a PODCAST')
})

fotos_btn.addEventListener("click", function() {
  videos_div.style.display = "none"
  podcast_div.style.display = "none"
  fotos_div.style.display = "inherit"
  console.log('Clikeando FOTOS')
})
