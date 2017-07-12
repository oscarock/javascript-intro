function Controller(model,view){
	this.model = model
	this.view = view
}

function Model(){}

function View(){}

Controller.prototype.event_keyboard_player1 = function() {
	var a = 1
	$(document).keyup(function(event){
	    if (event.keyCode == 80) {
			// console.log($('#player1_strip td').hasClass('inactive active'))
			// if($('#player1_strip td').hasClass('inactive') === 'inactive') {
			// 	$('#player1_strip td').removeClass('inactive')
			// }

			// console.log(a++)
			// console.log('valor' + a);
			// console.log($('.racer_table td').attr('class'))
			// console.log($('#player1_strip td').hasClass('inactive'))
			// if ($('#player1_strip td').hasClass('inactive')) {
			// 	$('#player1_strip td').eq(a++).removeClass('inactive')
			// }
			$('#player1_strip').find('td').eq(a++).addClass(function(){
				$(this).addClass('active')
			})
			// console.log($('#player1_strip td').eq(a).removeClass('active'))
	    }
	});
}



var play = new Controller()
play.event_keyboard_player1()
