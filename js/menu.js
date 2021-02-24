$(document).ready(main)

var contador = 1

// contador = 1 es cuando el menu esta Activo
// contador = 0 es cuando el menu esta Oculto

function main() {
  $('.menu_bar').click(function() {
    // $('nav').toggle()

    if(contador == 1) {
      $('nav').animate({
        left: '0'
      })
       contador = 0
    } else {
      $('nav').animate({
        left: '-100%'
      })
      contador = 1
    }

  })
}
