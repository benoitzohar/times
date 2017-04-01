require 'rails_helper'

RSpec.describe 'Tasks API', type: :request do
  # initialize test data
  let!(:tasks) { create_list(:task, 10) }
  let(:task_id) { tasks.first.id }

  # Test suite for GET /tasks
  describe 'GET /tasks' do
    # make HTTP get request before each example
    before { get '/tasks', params:nil, headers:{'Authorization' => tasks.first.code} }

    it 'returns tasks' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Test suite for GET /tasks/:id
  describe 'GET /tasks/:id' do
    before { get "/tasks/#{task_id}", params:nil, headers:{'Authorization' => tasks.first.code} }

    context 'when the record exists' do
      it 'returns the task' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(task_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:task_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Task/)
      end
    end
  end

  # Test suite for POST /tasks
  describe 'POST /tasks' do
    # valid payload
    let(:valid_attributes) { { title: 'Learn Elm' } }

    context 'when the request is valid' do
      before { post '/tasks', params: valid_attributes, headers:{'Authorization' => tasks.first.code} }

      it 'creates a task' do
        expect(json['title']).to eq('Learn Elm')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/tasks', params: { no: 'Foobar' }, headers:{'Authorization' => tasks.first.code} }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
          .to match(/Validation failed: Title can't be blank/)
      end
    end
  end

  # Test suite for PUT /tasks/:id
  describe 'PUT /tasks/:id' do
    let(:valid_attributes) { { title: 'Shopping' } }

    context 'when the record exists' do
      before { put "/tasks/#{task_id}", params: valid_attributes, headers:{'Authorization' => tasks.first.code} }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  # Test suite for DELETE /tasks/:id
  describe 'DELETE /tasks/:id' do
    before { delete "/tasks/#{task_id}", params:nil, headers:{'Authorization' => tasks.first.code} }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end

  # Test suite for POST /current-task/:task-id
  describe 'POST /current-task/:id' do
    before { post "/current-task/#{task_id}", params:nil, headers:{'Authorization' => tasks.first.code} }

    it 'returns current task' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json['title']).to eq(tasks.first.title)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Test suite for GET /current-task
  describe 'GET /current-task' do
    before { get "/current-task", params:nil, headers:{'Authorization' => tasks.first.code} }

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
end
