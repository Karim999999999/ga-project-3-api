import { connectToDb, disconnectDb } from './helpers.js';
import articles from './data.js';
import Article from '../models/article.js';
import User from '../models/user.js';
import mongoose from 'mongoose';
import athletes from '../models/athletes.js';

const adminUser = {
  firstName: 'admin',
  lastName: 'user',
  email: 'admin@admin.com',
  username: 'admin',
  password: 'password!1',
  articles: [],
  isAdmin: true,
  isWriter: false,
  isEditor: false,
  isCoach: false,
  isAthlete: false,
  isMedical: false,
};

const writerUser = {
  firstName: 'writer',
  lastName: 'user',
  email: 'writer@writer.com',
  username: 'writer',
  password: 'password!1',
  articles: [],
  isAdmin: false,
  isWriter: true,
  isEditor: false,
  isCoach: false,
  isAthlete: false,
  isMedical: false,
};

const editorUser = {
  firstName: 'editor',
  lastName: 'user',
  email: 'editor@editor.com',
  username: 'editor',
  password: 'password!1',
  articles: [],
  isAdmin: false,
  isWriter: false,
  isEditor: true,
  isCoach: false,
  isAthlete: false,
  isMedical: false,
};

const coachUser = {
  firstName: 'coach',
  lastName: 'user',
  email: 'coach@coach.com',
  username: 'coach',
  password: 'password!1',
  articles: [],
  isAdmin: false,
  isWriter: false,
  isEditor: false,
  isCoach: true,
  isAthlete: false,
  isMedical: false,
};

const athleteUser = {
  firstName: 'athlete',
  lastName: 'user',
  email: 'athlete@athlete.com',
  username: 'athlete',
  password: 'password!1',
  articles: [],
  isAdmin: false,
  isWriter: false,
  isEditor: false,
  isCoach: false,
  isAthlete: true,
  isMedical: false,
};

const medicalUser = {
  firstName: 'medical',
  lastName: 'user',
  email: 'medical@medical.com',
  username: 'medical',
  password: 'password!1',
  articles: [],
  isAdmin: false,
  isWriter: false,
  isEditor: false,
  isCoach: false,
  isAthlete: false,
  isMedical: true,
};

async function seed() {
  //? Connecting.
  console.log('About to connect to Mongodb via Mongoose');
  await connectToDb();
  console.log('Successfully connected to Mongo DB via Mongoose!');

  //? Clearing the data
  console.log('Clearing out the db...');
  await User.deleteMany({});
  await Article.deleteMany({});

  //? Creating Admin user
  console.log('Creating users...');
  const [admin, user] = await User.create([
    adminUser,
    writerUser,
    editorUser,
    coachUser,
    athleteUser,
    medicalUser,
  ]);
  console.log(`Created admin user: ${admin._id}`);
  console.log(`Created writer user: ${writer._id}`);
  console.log(`Created editor user: ${editor._id}`);
  console.log(`Created coach user: ${coach._id}`);
  console.log(`Created athlete user: ${athlete._id}`);
  console.log(`Created medical user: ${medical._id}`);

  //? SEEDING
  console.log('About to seed...');
  const articles = await Article.create(articles);
  console.log(`Seeded ${articles.length} articles!`);

  //? Disconnecting
  console.log('About to disconnect..');
  await disconnectDb();
  console.log('Disconnected!');
}
seed();

// async function seedDatabase() {
//   try {
//     await connectToDb();

//     console.log('🤖 Database connected!');

//     await mongoose.connection.db.dropDatabase();

//     console.log('🤖 Database was dropped!');

//
//     console.log('Users created!');

//     //const articles = await Article.create([]);
//   } catch (err) {
//     console.log('🤖 Something went wrong with seeding!');
//     console.log(err);

//     await mongoose.connection.close();
//     console.log('🤖 Goodbye!');
//   }
// }
// seedDatabase();
