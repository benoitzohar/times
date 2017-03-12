FactoryGirl.define do
  factory :task do
    code { 'CODE_TEST' }
    title { Faker::Zelda.game }
    duration { Faker::Number.number(10) }
  end
end
