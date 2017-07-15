get '/' do
	@todos = Todo.all
	erb :index
end

post '/add_todo' do
	new_todo = Todo.create(todo_content: params[:todo_content])
	content_type :json
	{new_todo: new_todo}.to_json
end

get '/todo/:id/delete' do
	todo = Todo.find(params[:id])
	todo.destroy
	redirect '/'
end


get '/todo/:id/completed' do
	todo = Todo.find(params[:id])
	todo.update(completed: true)
	redirect '/'
end

