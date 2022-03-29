import Article from '../models/article.js';
import User from '../models/user.js';

// I tend to write async functions with .then syntax because I value brevity and there's less room for bugs (remember the bugs lab? :D) and moreover our code will be different from the rest of the class, but if you guys prefer I'll take a minute to rewrite them like:

const getArticles = async (req, res, next) => {
  try {
    let query;

    // Make a copy of req query in order to select only certain fields
    const reqQuery = { ...req.query };

    // Fields to esclude
    const fieldsToRemove = ['select', 'sort', 'page', 'limit'];

    // loop over fields to exclude and remove them from reqQuery
    fieldsToRemove.forEach(param => delete reqQuery[param]);

    // Create express friendly query strings, that will prepend a '$' to the operators
    const queryStr = JSON.stringify(reqQuery).replace(
      /\b(gt|gte|lt|lte|in)\b/g,
      match => `$${match}`
    );

    // Finding resource
    query = Article.find(JSON.parse(queryStr));

    // Select fields
    if (req.query.select) {
      const fields = req.query.select.split(',').join(' ');
      query = query.select(fields);
    }

    // Sort
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query.sort('-createdAt');
    }

    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 3;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Article.countDocuments();

    query = query.skip(startIndex).limit(limit);

    // Execute query
    const articles = await query;

    // Pagination results
    const pagination = {};

    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit,
      };
    }

    if (startIndex > 0) {
      pagination.prev = { page: page - 1, limit };
    }

    res
      .status(200)
      .json({ length: articles.length, pagination, data: articles });
  } catch (err) {
    next(err);
  }
};

const getArticleByStatusAndUserId = (req, res, next) => {
  try {
    if (req.currentUser) {
      const articlesByStatus = Article.find({
        author: req.currentUser.userId,
        status: req.params.articleStatus,
      });
      return res.status(200).json(articlesByStatus);
    }
    return res.status(400).send({ message: 'unauthorized' });
  } catch (error) {
    next(error);
  }
};
const getArticleById = (req, res, next) => {
  Article.findById(req.params.id)
    .then(article => res.status(200).json(article))
    .catch(next);
};

const createArticle = async (req, res, next) => {
  try {
    if (req.currentUser) {
      const user = req.currentUser;

      const article = await Article.create({
        ...req.body,
        author: user._id,
        writtenBy: user.username,
      });

      await User.updateOne({ $push: { articles: article._id } });

      return res.status(201).json(article);
    }

    return res.status(400).send('Unauthorized');
  } catch (err) {
    next(err);
  }
};

const updateArticle = (req, res, next) =>
  Article.findById(req.params.id)
    .then(article => article.set(req.body))
    .then(updatedArticle => res.status(200).json(updatedArticle))
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
  getArticleByStatusAndUserId,
};
