$(document).ready(function() {
  createPost()
  countPost()
});

function createPost(){
	$('form').on('submit',function(e){
		e.preventDefault()
		var form = this
		$.ajax({
			method: 'POST',
			url: form.action,
			data:{
				title: form.title.value
			},
		}).done(function(response){
			// console.log(response)
			$('.post-container').append(response)
		}).fail(function(response){
			console.log("fail")
		})
	})	
}

function countPost(){
	$('.vote-button').on('click',function(e){
		e.preventDefault()
		var link = this
		$.ajax({
			method: 'GET',
			url: link.href
		}).done(function(response){
			console.log(response)
		})
	})
}
