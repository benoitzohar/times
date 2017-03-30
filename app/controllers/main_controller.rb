class MainController < ApplicationController
  def index
    currentTask = Task.where({code: params[:code], id: 1}) #TODO change id to current
    @main_props = {
        params: {
            code: params[:code],
            currentTask: currentTask
        },
        tasks: Task.where({code: params[:code]}),
        segments: Segment.where({task: currentTask})
    }
  end

  def code_generator
      randomCode = ('a'..'z').to_a.shuffle[0,42].join
      redirect_to action: "index", code: randomCode
  end
end
