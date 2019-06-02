### Mini Auth Service
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

### Test API
1. Register: `localhost:3000/api/v1/auth/register`
2. Login: `localhost:3000/api/v1/auth/login`
3. Retrieve Post: `localhost:3000/api/v1/posts`

### WIP
- Unit Test