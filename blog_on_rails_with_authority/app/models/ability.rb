class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new
    if user.is_admin?
      can :manage, :all
    else
      can :read, :all
    end

    can :manage, Post do |post|
      post.user == user
    end

    can :manage, Comment do |comment|
      comment.user == user
    end

    can :manage, User do |valid_user|
      valid_user == user 
    end
  end
end
