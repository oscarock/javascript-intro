get '/' do
  redirect '/posts'
end

get '/posts' do
  @posts = Post.all
  erb :index
end

get '/posts/:id/vote' do
  post = Post.find(params[:id])
  vote = Vote.find(params[:id])
  ok = post.votes.create(value: 1)
  content_type :json
  {vote: ok,state: 'vote_ok'}.to_json
end

delete '/posts/:id' do
  # Implementar la logica de esta ruta.
end

post '/posts' do
  new_post = Post.new(title: params[:title])
  if new_post.save
    status 200  
    erb :"_post", layout: false, locals: {new_post: new_post}
  else
    content_type :json
    status 400 
    {error: new_post.errors.full_messages}.to_json
  end
end

get '/post/:id' do
  @post = Post.find(params[:id])
  erb :post
end
