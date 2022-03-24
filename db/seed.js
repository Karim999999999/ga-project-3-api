import { connectToDb, disconnectDb } from './helpers.js';
import articles from './data.js';
import Article from '../models/article.js';

connectToDb()
  .then(() => console.log('Connected to DB'))
  .then(Article.deleteMany({}))
  .then(Article.create(articles))
  .then(() => console.log('Articles created'))
  .then(disconnectDb)
  .then(() => console.log('Disconneted from db'))
  .catch(console.error);
