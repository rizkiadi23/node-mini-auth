## Simple Module Authentication
A sample mini auth service that implementing client creds flow with jwt.

### Installation
1. Install the project by using `npm install`
2. Create your environment variables `touch .env`
3. Copy the file `.env.sample` to your `.env` file
4. Start the server `npm start`

### Prepare Database
The service is using MongoDb as its database. to get the connection string (DB_CONNECT value):
1. Create your free account at https://cloud.mongodb.com
2. Create your Clusters & Collections
3. Generate your connection string and copy the value to `DB_CONNECT` in your .env file

### cURL Request to Test The APIs
1. Register:
  ```sh
  curl -X POST \
    http://localhost:3000/api/v1/auth/register \
    -H 'Cache-Control: no-cache' \
    -H 'Connection: keep-alive' \
    -H 'Content-Type: application/json' \
    -d '{
    "name": "usertest1",
    "email": "usertest1@gmail.com",
    "password": "usertest1"
  }'
  ```
2. Login: `localhost:3000/api/v1/auth/login`
  ```sh
  curl -X POST \
  http://localhost:3000/api/v1/auth/login \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
    "email": "usertest1@gmail.com",
    "password": "usertest1"
  }'
  ```
3. Retrieve Post: `localhost:3000/api/v1/posts`
  ```sh
  curl -X GET \
  http://localhost:3000/api/v1/posts \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache'
  ```

### WIP
- Unit Test