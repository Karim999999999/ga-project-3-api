import { connectToDb, disconnectDb } from './helpers.js';

async function seed() {
  //! Connecting to db via mongoose
  console.log('About to connect to MongoDb via Mongoose');
  await connectToDb();
  console.log('Succesfully connected to MongoDb via Mongoose!');

  //? Clearing data

  //? Creating admin user

  //? Seeding data

  //! Disconnecting from db
  console.log('About to disconnect...');
  await disconnectDb();
  console.log('Disconnected!');
}

seed();
