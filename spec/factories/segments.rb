FactoryGirl.define do
  factory :segment do
    task_id nil
    title { Faker::Zelda.character }
    startdate { Faker::Date.backward(14) }
    enddate { Faker::Date.backward(14) }
    duration { Faker::Number.number(10) }
    created_at { Faker::Date.backward(14) }
    updated_at { Faker::Date.backward(14) }
  end
end
