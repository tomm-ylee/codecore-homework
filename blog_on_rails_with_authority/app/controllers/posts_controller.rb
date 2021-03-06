class PostsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
  before_action :find_post, only: [:show, :edit, :update, :destroy]
  before_action :authorize_user!, only: [:edit, :update, :destroy]


  def new
    @post = Post.new
  end

  def create
    @post = Post.new post_params
    @post.user = current_user

    if @post.save
      redirect_to root_path
    else
      render :new
    end

  end

  def index
    @posts = Post.order(created_at: :desc)
  end

  def show
    @comment = Comment.new
    @comments = Post.find(params[:id]).comments.order(created_at: :desc)
  end

  def edit
  end

  def update
    if @post.update post_params
      redirect_to post_path @post.id
    else
      render :edit
    end
  end

  def destroy
    @post.destroy
    redirect_to root_path
  end

  private

  def find_post
    @post = Post.find params[:id]
  end

  def post_params
    params.require(:post).permit(:title, :body)
  end

  def authorize_user!
    unless can?(:manage, @post)
      flash[:alert] = "Access Denied"
      redirect_to post_path @post
    end
  end
end
