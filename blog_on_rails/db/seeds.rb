Post.destroy_all

50.times do
  p = Post.create(
    title: Faker::Dog.name,
    body: Faker::RickAndMorty.quote
  )
end

puts "Seeded #{Post.count} posts"
