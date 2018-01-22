load './include_to.rb'
load './extend_to.rb'

puts "\nThe following title is made from including the HelperMethod module to a class"
puts IncludeTo.new.titleize('harry potter and the philosopher\'s stone')



puts "\nThe following title is made from extending the HelperMethod module to a class"
puts ExtendTo.titleize('harry potter and the deathly hallows')
puts
