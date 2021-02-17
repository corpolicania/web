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
})

podcast_btn.addEventListener("click", function() {
  videos_div.style.display = "none"
  podcast_div.style.display = "inherit"
  fotos_div.style.display = "none"
})

fotos_btn.addEventListener("click", function() {
  videos_div.style.display = "none"
  podcast_div.style.display = "none"
  fotos_div.style.display = "inherit"
})


// --------------------- THE LIGHTBOX---------------------
let images = document.querySelectorAll('.img')
let containerImage = document.querySelectorAll('.container-img')[0]
let imageContainer = document.querySelector('.img-show')
let copy = document.querySelector('.copy')
let closeModal = document.getElementById('close-x')
let videos = document.querySelectorAll('.vid')

let addImage = (srcImage, altImage) =>{
  containerImage.classList.toggle('move')
  imageContainer.classList.toggle('show')
  imageContainer.src = srcImage
  // copy.innerHTML = altImage
}

let addIframe = (srcIframe) => {
  containerImage.classList.toggle('move')
  imageContainer.classList.toggle('show')
  imageContainer.src = srcIframe
  // copy.ineerHTML = altIframe
}

images.forEach(image => {
  image.addEventListener("click", () => {
    addImage(image.getAttribute('src'))
  })
})

videos.forEach(iframe => {
  iframe.addEventListener("click", () => {
    addIframe(iframe.getAttribute('src'))
  })
})


containerImage.addEventListener("click", () => {
  containerImage.classList.toggle('move')
  imageContainer.classList.toggle('show')
})

closeModal.addEventListener("click", () => {
  containerImage.classList.toggle('move')
})


document.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
    	containerImage.classList.toggle("move")
      imageContainer.classList.toggle("show")
    }
})
