import Article from '../models/article.js';
import User from '../models/user.js';

// I tend to write async functions with .then syntax because I value brevity and there's less room for bugs (remember the bugs lab? :D) and moreover our code will be different from the rest of the class, but if you guys prefer I'll take a minute to rewrite them like:

const getArticles = (req, res, next) => {
  Article.find()
    .then((articles) => res.status(200).json(articles))
    .catch(next);
};
const getArticleById = (req, res, next) => {
  Article.findById(req.params.id)
    .then((article) => res.status(200).json(article))
    .catch(next);
};

const createArticle = async (req, res, next) => {
  try {
    if (req.currentUser) {
      const user = req.currentUser;
      console.log(req.currentUser);

      const article = await Article.create({
        ...req.body,
        author: user._id,
      });

      await user.updateOne({ $push: { articles: article._id } });

      return res.status(201).json(article);
    }

    return res.status(400).send('Unauthorized');
  } catch (err) {
    next(err);
  }
};

const updateArticle = (req, res, next) =>
  Article.findById(req.params.id)
    .then((article) => article.set(req.body))
    .then((updatedArticle) => res.status(200).json(updatedArticle))
    .catch(next);

const deleteArticle = (req, res, next) =>
  Article.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).send('Article was deleted'))
    .catch(next);

export {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};
