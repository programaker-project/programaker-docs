# How to operate Programaker's API with curl

## User creation

Endpoint: `server:port/api/v0/sessions/register/`

Headers:
- Content-Type: application/json

Body:
- email: &lt;User email&gt;
- username: &lt;User name&gt;
- Password: &lt;User password&gt;

Success result code: 201

Example:

    $ curl -v localhost:8888/api/v0/sessions/register/ -d '{"email":"some-mail", "username": "some-name",  "password": "pass"}' -H 'Content-Type: application/json'
    *   Trying 127.0.0.1...
    * TCP_NODELAY set
    * Connected to localhost (127.0.0.1) port 8888 (#0)
    > POST /api/v0/sessions/register/ HTTP/1.1
    > Host: localhost:8888
    > User-Agent: curl/7.58.0
    > Accept: */*
    > Content-Type: application/json
    > Content-Length: 67
    >
    * upload completely sent off: 67 out of 67 bytes
    < HTTP/1.1 201 Created
    < Access-Control-Allow-Headers: authorization, content-type, xsrf-token
    < Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
    < Access-Control-Allow-Origin: *
    < Access-Control-Expose-Headers: xsrf-token
    < Access-Control-Max-Age: 3600
    < content-length: 0
    < content-type: text/html
    < date: Tue, 17 Sep 2019 08:27:25 GMT
    < location: /api/v0/users/19dc4c21-7513-4547-8501-7e445d49df12
    < server: Cowboy
    <
    * Connection #0 to host localhost left intact

## User login

Endpoint: `server:port/api/v0/sessions/login/`

Headers:
- Content-Type: application/json

Body:
- username: &lt;User name&gt;
- Password: &lt;User password&gt;

Success result: 200

Example:

    $ curl -v localhost:8888/api/v0/sessions/login/ -d '{"username": "some-name",  "password": "pass"}' -H 'Content-Type: application/json'
    *   Trying 127.0.0.1...
    * TCP_NODELAY set
    * Connected to localhost (127.0.0.1) port 8888 (#0)
    > POST /api/v0/sessions/login/ HTTP/1.1
    > Host: localhost:8888
    > User-Agent: curl/7.58.0
    > Accept: */*
    > Content-Type: application/json
    > Content-Length: 46
    >
    * upload completely sent off: 46 out of 46 bytes
    < HTTP/1.1 200 OK
    < Access-Control-Allow-Headers: authorization, content-type, xsrf-token
    < Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
    < Access-Control-Allow-Origin: *
    < Access-Control-Expose-Headers: xsrf-token
    < Access-Control-Max-Age: 3600
    < content-length: 112
    < content-type: application/json
    < date: Tue, 17 Sep 2019 08:40:06 GMT
    < server: Cowboy
    <
    * Connection #0 to host localhost left intact
    {"user_id":"19dc4c21-7513-4547-8501-7e445d49df12","token":"54113f52-3687-477b-9ee9-be6636b59340","success":true}

This returns a token and user_id which will be used on subsequent calls

## Bridge registration

Endpoint: `server:port/api/v0/users/$USER_NAME/bridges/`

Headers:
- Content-Type: application/json
- Authorization: token obtained on login

Body:
- name: &lt;Name of the bridge&gt;

Success result: 201

Example:

    $ USER_NAME=some-name
    $ TOKEN=54113f52-3687-477b-9ee9-be6636b59340
    $ curl -v localhost:8888/api/v0/users/$USER_NAME/bridges/ -d '{"name": "my-new-bridge"}'  -H "Authorization: $TOKEN" -H 'Content-Type: application/json'
    *   Trying 127.0.0.1...
    * TCP_NODELAY set
    * Connected to localhost (127.0.0.1) port 8888 (#0)
    > POST /api/v0/users/some-name/bridges/ HTTP/1.1
    > Host: localhost:8888
    > User-Agent: curl/7.58.0
    > Accept: */*
    > Authorization: 64c6ba4c-b814-40d6-8c72-b066a6c7bb1f
    > Content-Type: application/json
    > Content-Length: 25
    >
    * upload completely sent off: 25 out of 25 bytes
    < HTTP/1.1 201 Created
    < Access-Control-Allow-Headers: authorization, content-type, xsrf-token
    < Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
    < Access-Control-Allow-Origin: *
    < Access-Control-Expose-Headers: xsrf-token
    < Access-Control-Max-Age: 3600
    < content-length: 133
    < content-type: application/json
    < date: Tue, 17 Sep 2019 09:00:03 GMT
    < location: /api/v0/users/id/19dc4c21-7513-4547-8501-7e445d49df12/bridges/id/f3b1ae7e-6dfc-4d61-9e61-0267a78a66ea/communication
    < server: Cowboy
    <
    * Connection #0 to host localhost left intact
    {"control_url":"/api/v0/users/id/19dc4c21-7513-4547-8501-7e445d49df12/bridges/id/f3b1ae7e-6dfc-4d61-9e61-0267a78a66ea/communication"}

This `control_url` is the one used by the bridge when connecting to programaker.
