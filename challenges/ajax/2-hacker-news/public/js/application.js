$(document).ready(function() {
  createPost()
  countPost()
  deletePost()
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
			$('#error').html(JSON.parse(response.responseText).error[0])
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
			// console.log($(`article#${response.post_id} .points`))
			$(`article#${response.post_id} .points`).html(response.vote_count)
			$(`article#${response.post_id} .vote-button`).css({'color':'green'})
		})
	})
}

function deletePost(){
	$('.delete').on('click',function(e){
		e.preventDefault()
		var link = this
		$.ajax({
			method: 'GET',
			url: link.href
		}).done(function(response){
			$(`article#${response.post_delete}`).remove()
			console.log('borre')
		})
	})
}
