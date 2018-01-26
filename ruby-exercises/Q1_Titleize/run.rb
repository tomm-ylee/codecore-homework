require './helper_method.rb'

class ExtendTo
  extend HelperMethod
end

class IncludeTo
  include HelperMethod
end

puts "\nThe following title is made from including the HelperMethod module to a class"
puts IncludeTo.new.titleize('harry potter and the philosopher\'s stone')



puts "\nThe following title is made from extending the HelperMethod module to a class"
puts ExtendTo.titleize('harry potter and the deathly hallows')
