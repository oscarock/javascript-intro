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
			if($('#player1_strip td').last().hasClass('active')){
				alert('gano player 1')
			}
			$('#player1_strip').find('td').eq(a++).addClass(function(){
					$(this).addClass('active')
				})

			$(".active").prev().removeClass('active')
	    }
	});
}

Controller.prototype.event_keyboard_player2 = function() {
	var a = 1
	$(document).keyup(function(event){
	    if (event.keyCode == 81) {
			if($('#player2_strip td').last().hasClass('active')){
				alert('gano player 2')
			}

			$('#player2_strip').find('td').eq(a++).addClass(function(){
				$(this).addClass('active')
			})

			$(".active").prev().removeClass('active')
		}
	});
}

Controller.prototype.button_restard = function(){
	$('#restart').on('click',function(){
		location.reload();
	})
}

Controller.prototype.time_out = function(){
	setTimeout(function(){ $('#time').html("2") }, 1000);
	setTimeout(function(){ $('#time').html("1") }, 2000);
	setTimeout(function(){ $('.racer_table').show() }, 3000);
	setTimeout(function(){ $('#time').html("GOOO!!!") }, 3000);
	setTimeout(function(){ $('#restart').show() }, 4000);
}

var play = new Controller()
play.event_keyboard_player1()
play.event_keyboard_player2()
play.button_restard()
play.time_out()
