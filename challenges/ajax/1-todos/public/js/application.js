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
      if(response.error){
        $('.errors').html(response.error).show()
      }
      $('#table-1').append(`<tr id="${response.new_todo.id}">
        <td>${response.new_todo.id}</td>
        <td>${response.new_todo.todo_content}</td>
        <td>${response.new_todo.completed}</td>
        <td><a class="complete btn btn-primary" href="/todo/${response.new_todo.id}/completed">Complete</a>
        <a class="delete btn btn-danger" href="/todo/${response.new_todo.id}/delete">Eliminar</a>
        </td>
        </tr>`)
    })
  })
}

function completeTodo(){
  $('#table-1').on('click','.complete', function(e){
    e.preventDefault()
    var link = this
    $.ajax({
      method: 'GET',
      url: link.href,
  }).done(function(response){
      $('tr#'+response.todo.id).find('td').eq(2).html(response.completed)
    })
  })
}

function deleteTodo(){
  $('#table-1').on('click','.delete',function(e){
    e.preventDefault()
    var link = this
    $.ajax({
      method: 'GET',
      url: link.href,
  }).done(function(response){
    console.log('tr#'+response.todo.id)
      if(response.state === 'delete_ok'){
        $('tr#'+response.todo.id).remove()
      }
    })
  })
}

// Crea las funciones que añaden, remueven y completan TODOS.
