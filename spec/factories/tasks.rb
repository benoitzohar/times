FactoryGirl.define do
  factory :task do
    code { Faker::Code.imei }
    title { Faker::Zelda.game }
    duration { Faker::Number.number(10) }
  end
end
