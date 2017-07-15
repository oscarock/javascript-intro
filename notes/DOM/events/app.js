// document.querySelector("[href='http://tunaranja.co']").addEventListener('click', function(event){
//   event.preventDefault()
//   event.stopPropagation();
//   alert('Super tu naranjas')
// })

var maria = {
  hijos: {
    german: {}
  }
}

$(document).ready(function() {

  var handler = function(event){
    event.preventDefault()
    alert('Las mejores naranjas')
  }


  $("[href='http://tunaranja.co']").on('click', function(event){
    event.preventDefault()
    alert('Las mejores naranjas')
  })
})

























// $(document).ready(function() {
//   $('#boton').on('click', function(event){
//     event.preventDefault()
//     console.log('Holaaa')
//   })

//   $('a[href="http://tunaranja.co"]').on('click', function(event){
//     event.preventDefault()
//     console.log('Tu Naranja')
//   })
// })

// $('#breeds').on('click', function(evento){
//   console.log('hola')
// })

// $(document).ready(function(){

// })
