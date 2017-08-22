# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

  20.times do
    Cat.create({
      name: Faker::Name.name,
      description: Faker::Twitter.status,
      color: %w(orange calico black grey tiger white).sample,
      sex: %w(M F).sample,
      birth_date: "#{(2010..2016).to_a.sample}/0#{(1..9).to_a.sample}/20"
      })

  end



end
