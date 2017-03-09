class TasksController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_task, only: [:show, :update, :destroy]

  # GET /tasks
  def index
    @tasks = Task.where(code: get_code)
    json_response(@tasks)
  end

  # POST /tasks
  def create
    params[:code] = get_code(request)
    @task = Task.create!(task_params)
    json_response(@task, :created)
  end

  # GET /tasks/:id
  def show
    json_response(@task)
  end

  # PUT /tasks/:id
  def update
    @task.update(task_params)
    head :no_content
  end

  # DELETE /tasks/:id
  def destroy
    @task.destroy
    head :no_content
  end

  private

  def task_params
    # whitelist params
    params.permit(:code, :title, :duration)
  end

  def set_task
    @task = Task.find(params[:id])

    #ensure the code is correct
    if @task.code != get_code(request)
        head :no_content
    end
  end

end
