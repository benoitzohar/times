
Rails.application.routes.draw do
    resources :tasks do
        resources :segments
    end

    root "main#code_generator"
    get '/code/:code', to: 'main#index'
    get '/code-generator', to: 'main#code_generator'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
