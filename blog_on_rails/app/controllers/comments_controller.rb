class CommentsController < ApplicationController
  def create
    @post = Post.find params[:post_id]
    @comment = Comment.new comment_params
    @comment.post = @post

    if @comment.save
      redirect_to post_path(@post)
    else
      redirect_to post_path(@post)
    end
  end

  def destroy
    comment = Comment.find params[:id]
    comment.destroy

    redirect_to post_path comment.post.id
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end

end
