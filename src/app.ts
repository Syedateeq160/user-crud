import express from 'express';
import bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import { createUser,deleteUser,updateUser,getUser } from './controllers/UserController';
import { authenticateJWT } from './middleware/authMiddleware';
const app = express();
app.use(bodyParser.json());


app.post('/users', createUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);
app.get('/users/:id', getUser);

// Implement other routes for CRUD operations

app.listen(3000, async () => {
  console.log('Server is running on port 3000');
  await createConnection(); // Connect to the database
});
