Post.destroy_all

50.times do
  p = Post.create(
    title: Faker::Dog.name,
    body: Faker::RickAndMorty.quote
  )
  if p.valid?
    rand(2..10).times.each do
      Comment.create(
        body: Faker::Pokemon.move,
        post: p
      )
    end
  end
end

puts "Seeded #{Post.count} posts and #{Comment.count} comments"
