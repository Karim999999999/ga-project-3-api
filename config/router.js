import express from 'express';

import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

import {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} from '../controllers/articleController.js';

const router = express.Router();

router.route('/articles').get(getArticles).post(createArticle);

router
  .route('/articles/:id')
  .get(getArticleById)
  .put(updateArticle)
  .delete(deleteArticle);

router.route('/users').get(getAllUsers).post(createUser);

router.route('/users/:id').get(getUserById).put(updateUser).delete(deleteUser);

export default router;
