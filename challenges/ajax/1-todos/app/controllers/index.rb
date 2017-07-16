get '/' do
	@todos = Todo.all
	erb :index
end

post '/add_todo' do
	new_todo = Todo.new(todo_content: params[:todo_content])
	content_type :json
	if new_todo.save 
		{new_todo: new_todo}.to_json
	else
		{error: new_todo.errors.full_messages}.to_json
	end

	# new_todo = Todo.create(todo_content: params[:todo_content])
	# content_type :json
	# {new_todo: new_todo}.to_json
end

get '/todo/:id/delete' do
	todo = Todo.find(params[:id])
	todo.destroy
	content_type :json
	{todo: todo,state: 'delete_ok'}.to_json
end

get '/todo/:id/completed' do
	todo = Todo.find(params[:id])
	completed = todo.update(completed: true)
	content_type :json
	{todo: todo,completed: completed}.to_json
end

