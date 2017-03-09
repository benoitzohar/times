module Security
    # Read code from headers (it needs to be put in "Authorization")
    def get_code(request)
        return request.headers['HTTP_AUTHORIZATION']
    end
end
