Rails.application.routes.draw do
  # get 'authors/index'
  # get 'books/index'
  # get 'authors/new'

  resources :authors
  resources :books

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  
  root to: 'authors#index'

  # constraints subdomain: 'api' do
  #   if Rails.env.development?
  #     mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  #   end
  #   post "/graphql", to: "graphql#execute"
  # end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
