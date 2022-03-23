import express from 'express';
import { port } from './config/environment.js';

const app = express();
app.use(express.json());

app.use('/api', router);

async function runServer() {
  console.log('Connecting to db...');
  await connectToDb();
  console.log('Database connected');
  app.listen(port, () => console.log(`App is listening on port: ${port}`));
}

runServer();
