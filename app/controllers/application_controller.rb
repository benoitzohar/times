class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include Response
  include ExceptionHandler
  include Security
end
