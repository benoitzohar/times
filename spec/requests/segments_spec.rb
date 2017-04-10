RSpec.describe 'Segments API' do
  # Initialize the test data
  let!(:task) { create(:task) }
  let!(:segments) { create_list(:segment, 20, task_id: task.id) }
  let(:task_id) { task.id }
  let(:id) { segments.first.id }

  # Test suite for GET /tasks/:task_id/segments
  describe 'GET /tasks/:task_id/segments' do
    before { get "/tasks/#{task_id}/segments", params: nil, headers:{'Authorization' => task.code} }

    context 'when task exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns all task segments' do
        expect(json.size).to eq(20)
      end
    end

    context 'when task does not exist' do
      let(:task_id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Task/)
      end
    end
  end

  # Test suite for GET /tasks/:task_id/segments/:id
  describe 'GET /tasks/:task_id/segments/:id' do
    before { get "/tasks/#{task_id}/segments/#{id}", params: nil, headers:{'Authorization' => task.code} }

    context 'when task segment exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns the segment' do
        expect(json['id']).to eq(id)
      end
    end

    context 'when task segment does not exist' do
      let(:id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Segment/)
      end
    end
  end

  # Test suite for POST /tasks/:task_id/segments
  describe 'POST /tasks/:task_id/segments' do
    let(:valid_attributes) { { title: 'Visit Narnia', startdate: Faker::Date.backward(1) } }

    context 'when request attributes are valid' do
      before { post "/tasks/#{task_id}/segments", params: valid_attributes, headers:{'Authorization' => task.code} }

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

  end

  # Test suite for PUT /tasks/:task_id/segments/:id
  describe 'PUT /tasks/:task_id/segments/:id' do
    let(:valid_attributes) { { title: 'Mozart', startdate: Faker::Date.backward(1) } }

    before { put "/tasks/#{task_id}/segments/#{id}", params: valid_attributes, headers:{'Authorization' => task.code} }

    context 'when segment exists' do
      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end

      it 'updates the segment' do
        updated_segment = Segment.find(id)
        expect(updated_segment.title).to match(/Mozart/)
      end
    end

    context 'when the segment does not exist' do
      let(:id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Segment/)
      end
    end
  end

  # Test suite for DELETE /tasks/:id
  describe 'DELETE /tasks/:id' do
    before { delete "/tasks/#{task_id}/segments/#{id}", headers:{'Authorization' => task.code} }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
