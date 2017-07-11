// $(document).ready(function() {  // Codigo Procedural Procedimental --> OOP
//   // Event Listener
//   $('#roller button.add').on('click', function() { // Controlador
//     $('.dice').append('<div class="die">0</div>'); // Vista
//   });
//
//   // Event listener
//   $('#roller button.roll').on('click', function() { // Controlador
//     $('.die').each(function(index, dieHtml) { // Controlador
//       var value = Math.floor((Math.random()*6)+1); // Model
//       $(dieHtml).text(value); // Vista
//     });
//   });
// });


//mi solucion
function Controller(model, view) {
    this.model = model
    this.view = view
}

function Model(){}

function View(){}

Controller.prototype.event_botton_add = function() {
    var controller = this
    // console.log(this)
    $('#roller button.add').on('click', function() {
        controller.view.content_add_button()
    });
}

Controller.prototype.event_botton_roll = function(){
    var controller = this
    // console.log(this)
    $('#roller button.roll').on('click', function() {
        // console.log(controller.model.roll_die())
        $('.die').each(function(index, dieHtml) {
          var value = controller.model.roll_die
          $(dieHtml).text(value);
        })
    })
}

View.prototype.content_add_button = function(){
    $('.dice').append('<div class="die">0</div>')
    // console.log('entre')
}

Model.prototype.roll_die = function (){
    return Math.floor((Math.random()*6)+1)
    // console.log('entre')
}


var play_game = new Controller(new Model(), new View())
play_game.event_botton_add()
play_game.event_botton_roll()
