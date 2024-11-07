Rails.application.routes.draw do
  resources :users, only: [:new, :create]
  get "up" => "rails/health#show", as: :rails_health_check
  root "users#new"
  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest

end
