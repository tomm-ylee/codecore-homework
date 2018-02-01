major_cities = {
  BC: ["Vancouver", "Victoria", "Prince George"],
  AB: ["Edmonton", "Calgary"]
}

major_cities.each do |prov, city|
  if city.length > 1
    puts "#{prov} has #{city.length} main cities: #{city[0..-2].join(', ')} and #{city[-1]}"
  elsif city.length == 1
    puts "#{prov} has 1 main city: #{city}"
  end
end
