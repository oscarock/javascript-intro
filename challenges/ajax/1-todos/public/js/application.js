$(document).ready(function() {
  // bindEvents();
  createTodo()
});


// function bindEvents() {
//   // Enlaza los eventos que agregan, remuevan y completan TODOS a los elmentos del DOM indicados
//   $('.delete-buton').on('click', delteTot)
//   $(form).on('submit', crateTodo)
// }

// function buildTodo(todoName) {
//   // Eso nos ta un pedazo del DOM
//   var todoTemplate = $.trim($('#todo_template').html());
//   // Creamos un elemento de jquery a partir del template
//   var $todo = $(todoTemplate);
//   // Modificamos el texto con el que nos pasen como argumento
//   $todo.find('h2').text(todoName);
//   // Devuelve el elemento de jquery para ser usado en otra parte.
//   return $todo;
// }

function createTodo(){
  $('form').on('submit',function(e){
    event.preventDefault()
    var form = this
    // console.log(form.todo_content.value)
    $.ajax({
      method: 'POST',
      url: form.action,
      data: {
        todo_content: form.todo_content.value
      }
    }).done(function(response) {
      console.log(response)
      
    })
  })
}

// Crea las funciones que añaden, remueven y completan TODOS.
