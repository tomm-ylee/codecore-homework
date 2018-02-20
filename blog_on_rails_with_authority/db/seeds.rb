Comment.destroy_all
Post.destroy_all
User.destroy_all


User.create(
  first_name: :Admin,
  last_name: :User,
  email: "admin@email.com",
  password: 'tester',
  is_admin: true
)

User.create(
  first_name: :Normal,
  last_name: :User,
  email: "peon@email.com",
  password: 'tester',
  is_admin: false
)

20.times do
User.create(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: Faker::Internet.email,
  password: 'tester'
)

end

50.times do
  p = Post.create(
    title: Faker::Dog.name,
    body: Faker::RickAndMorty.quote,
    user: User.all.sample
  )
  if p.valid?
    rand(2..10).times.each do
      Comment.create(
        body: Faker::Pokemon.move,
        post: p,
        user: User.all.sample
      )
    end
  end
end


puts "Created #{User.count} user"
puts "Seeded #{Post.count} posts and #{Comment.count} comments"
