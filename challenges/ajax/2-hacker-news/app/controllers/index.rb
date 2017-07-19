get '/' do
  redirect '/posts'
end

get '/posts' do
  @posts = Post.all
  erb :index
end

get '/posts/:id/vote' do
  post = Post.find(params[:id])
  post.votes.create(value: 1)
  content_type :json
  {post_id: post.id,vote_count:post.votes.count,state: 'vote_ok'}.to_json
end

get '/posts/:id' do
  post = Post.find(params[:id])
  post.destroy
  content_type :json
  {post_delete: post.id,status: 'delete_ok'}.to_json
end

post '/posts' do
  new_post = Post.new(title: params[:title])
  if new_post.save
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
