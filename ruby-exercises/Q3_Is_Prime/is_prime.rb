def is_prime? (num)
  count = 0
  for i in 1..num
    count += 1 if num % i == 0
  end
  count == 2
end

for x in 0...25
  puts "#{x} is prime? #{is_prime? x}"
end
