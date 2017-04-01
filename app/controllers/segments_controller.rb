class SegmentsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_task
  before_action :set_task_segment, only: [:show, :update, :destroy]

  # GET /tasks/:task_id/segments
  def index
    json_response(@task.segments)
  end

  # GET /tasks/:task_id/segments/:id
  def show
    json_response(@segment)
  end

  # POST /tasks/:task_id/segments
  def create
    @segment = @task.segments.create!(segment_params)
    @task.update_duration
    json_response(@segment, :created)
  end

  # PUT /tasks/:task_id/segments/:id
  def update
    @segment.update(segment_params)
    @task.update_duration
    head :no_content
  end

  # DELETE /tasks/:task_id/segments/:id
  def destroy
    @segment.destroy
    head :no_content
  end

  private

  def segment_params
    params.permit(:title, :startdate, :duration)
  end

  def set_task
    @task = Task.find(params[:task_id])

    #ensure the code is correct
    if @task.code != get_code(request)
        head :no_content
    end
  end

  def set_task_segment
    @segment = @task.segments.find_by!(id: params[:id]) if @task
  end
end
