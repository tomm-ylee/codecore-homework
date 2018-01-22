module HelperMethod

  def titleize (user_string)
    list =['in', 'the', 'of', 'and', 'or', 'from']
    user_string.split(' ').map { |word| list.include?(word) ? word : word.capitalize }.join(' ')
  end
end
