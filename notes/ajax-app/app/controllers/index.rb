get '/' do
  redirect '/posts'
end

get '/posts' do
  @posts = Post.includes(:votes).all
  erb :index
end

get '/posts/:id/vote' do
  p 'SI llegamos a votar un post'
  post = Post.find(params[:id])
  post.votes.create(value: 1)
  content_type :json
  {votes_count: post.votes.count, id: post.id}.to_json
end

delete '/posts/:id' do
  # Implementar la logica de esta ruta.
end

post '/posts' do
  p '*' * 50
  p params
  @post = Post.new( title: params["title"],
               username: Faker::Internet.user_name,
               comment_count: rand(1000) )
  if @post.save
    erb :"_post",layout: false, locals: {post: @post}
  else
    @error = post.errors.full_messages
    erb :index
  end
end


get '/post/:id' do
  @post = Post.find(params[:id])
  erb :post
end
