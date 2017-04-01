class MainController < ApplicationController
  def index
    current_task(params[:code])

    if !@current_task
        # create the initial task
        task = Task.create({
          code: params[:code],
          title: "My first task"
        });

        #register as current
        @current_task = CurrentTask.create({
          code: params[:code],
          task: task
        })
    end

    currentTask = @current_task.task if @current_task
    segments = currentTask.segments if currentTask
    @main_props = {
        params: {
            code: params[:code],
            currentTask: currentTask
        },
        tasks: Task.where({code: params[:code]}),
        segments: segments
    }
  end

  def code_generator
      # create the code
      randomCode = ('a'..'z').to_a.shuffle[0,42].join

      # redirect to the index
      redirect_to action: "index", code: randomCode
  end

  def get_current_task
      code = get_code(request)
      current_task(code)
      task = @current_task.task if @current_task
      json_response(task)
  end
  def set_current_task
      code = get_code(request)
      current_task(code)
      if @current_task
          @current_task.update({ task: params[:id] })
      else
          @current_task = CurrentTask.create!({ code: code, task: Task.find_by({id: params[:id]}) })
      end
      json_response(@current_task.task)
  end

  private

  def current_task(code)
      @current_task = CurrentTask.find_by({ code: code })
  end

end
