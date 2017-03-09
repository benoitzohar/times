class MainController < ApplicationController
  def index
    @main_props = { code: params[:code] }
  end

  def code_generator
      randomCode = ('a'..'z').to_a.shuffle[0,42].join
      redirect_to action: "index", code: randomCode
  end
end
