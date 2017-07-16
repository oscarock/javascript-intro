$(document).ready(function() {
  // bindEvents();
  createTodo()
  completeTodo()
  deleteTodo()
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
    $.ajax({
      method: 'POST',
      url: form.action,
      data: {
        todo_content: form.todo_content.value
      },
    }).done(function(response) {
      console.log(response)
      // $('#table-1').append(`<tr>
      //   <td>${response.new_todo.id}</td>
      //   <td>${response.new_todo.todo_content}</td>
      //   <td>${response.new_todo.completed}</td>
      //   <td><a class="complete" href="/todo/${response.new_todo.id}/completed">Complete</a> ||
      //   <a href="/todo/${response.new_todo.id}/delete">Eliminar</a>
      //   </td>
      //   </tr>`)
    })
  })
}

function completeTodo(){
  $('.complete').on('click', function(e){
    e.preventDefault()
    var link = this
    $.ajax({
      method: 'GET',
      url: link.href,
  }).done(function(response){
      $('tr:last').find('td').eq(2).html(response.completed)
    })
  })
}

function deleteTodo(){
  $('.delete').on('click',function(e){
    e.preventDefault()
    var link = this
    $.ajax({
      method: 'GET',
      url: link.href,
  }).done(function(response){
      if(response.state === 'delete_ok'){
        $('tr:last').remove()
      }
    })
  })
}

// Crea las funciones que añaden, remueven y completan TODOS.
