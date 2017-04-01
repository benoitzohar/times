class MainController < ApplicationController
  def index
    currentTask = Task.find_by!({code: params[:code], current: true}) #TODO change id to current
    @main_props = {
        params: {
            code: params[:code],
            currentTask: currentTask
        },
        tasks: Task.where({code: params[:code]}),
        segments: currentTask.segments
    }
  end

  def code_generator
      randomCode = ('a'..'z').to_a.shuffle[0,42].join
      redirect_to action: "index", code: randomCode
  end
end
