endpoint_url="http://localhost:3001/api/users/count"

data='{}'

send_request() {
    local response_code
    response_code=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$endpoint_url")
}

num_request=100

for ((i=1; i<=num_request; i++)); do
    send_request &
done

wait