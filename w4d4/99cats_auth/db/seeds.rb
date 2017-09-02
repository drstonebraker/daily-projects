# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  
  10.times do
    options = {
      username: Faker::Internet.user_name,
      password: 'password'
    }

    User.create!(options)
  end

  20.times do
    options = {
      birth_date: Faker::Date.birthday(0, 18),
      name: Faker::Cat.name,
      color: %w(black white orange brown).sample,
      sex: %w(M F).sample,
      description: Faker::Lorem.paragraph,
      user_id: (1..10).to_a.sample
    }

    Cat.create!(options)
  end

  60.times do
    start_date = Faker::Date.between(Date.today, 1.year.from_now)
    end_date = Faker::Date.between(start_date, 18.months.from_now)

    options = {
      cat_id: (1..20).to_a.sample,
      start_date: start_date,
      end_date: end_date
    }

    CatRentalRequest.create!(options)
  end

end
