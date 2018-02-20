class CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :destroy]
  before_action :find_comment, only: [:destroy]
  before_action :authorize_user!, only: [:destroy]

  def create
    @post = Post.find params[:post_id]
    @comment = Comment.new comment_params
    @comment.post = @post
    @comment.user = current_user

    if @comment.save
      redirect_to post_path @post
    else
      redirect_to post_path @post
    end
  end

  def destroy
    @comment.destroy

    redirect_to post_path @comment.post.id
  end

  private

  def find_comment
    @comment = Comment.find params[:id]
  end

  def authorize_user!
    unless can?(:manage, @comment)
      flash[:alert] = "Access Denied"
      redirect_to post_path @comment.post
    end
  end

  def comment_params
    params.require(:comment).permit(:body)
  end

end
