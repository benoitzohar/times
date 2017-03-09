class MainController < ApplicationController
  def index
    @main_props = { code: params[code] }
  end
end
