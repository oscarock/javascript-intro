function Controller(model,view){
	this.model = model
	this.view = view
}

function Model(){}

function View(){}

Controller.prototype.event_keyboard_player1 = function() {
	$(document).keyup(function(event){ 
	    if (event.keyCode == 80) {
	    	$('#player1_strip td').each(function(e){
	    		console.log(e)
	    	})
	    	// $('#player1_strip td.active').removeClass("active") 
	    }
	}); 
}



var play = new Controller()
play.event_keyboard_player1()