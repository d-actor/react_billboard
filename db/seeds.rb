# chart creation
10.times do
  Chart.create(
    name: Faker::AquaTeenHungerForce.character
  )
end

# songs creation
100.times do
  Song.create(
    title: Faker::Hipster.word,
    artist: Faker::RockBand.name,
    chart_id: Faker::Number.between(1, 10)
  )
end

puts "seeded"
