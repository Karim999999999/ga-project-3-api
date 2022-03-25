import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import { secret } from '../config/environment.js';

async function loginUser(req, res, next) {
  try {
    // ! Get the user from the database, and grab its hash.
    const user = await User.findOne({ email: req.body.email });
    // ! If there's no user
    if (!user) {
      return res.status(404).json({ message: 'Unauthorized, user not found' });
    }
    // ! Checks against the hashed pw in db, that its correct
    const isValidPw = user.validatePassword(req.body.password);

    if (!isValidPw) {
      return res
        .status(404)
        .json({ message: 'Unauthorized, passwords do not match' });
    }

    const token = jwt.sign(
      { userId: user._id, isAdmin: user.isAdmin }, // payload on our token
      secret, // the secret that only the developer knows
      { expiresIn: '6h' } // token expires in 6 hours
    );

    return res.status(202).send({ token, message: 'Login successful!' });
  } catch (e) {
    next(e);
  }
}
const getAllUsers = (req, res, next) =>
  User.find()
    .then((users) => res.status(200).json(users))
    .catch(next);

const getUserById = (req, res, next) =>
  User.findById(req.params.id)
    .then((user) => res.status(200).json(user))
    .catch(next);

const createUser = async (req, res, next) => {
  try {
    if (req.body.password !== req.body.passwordConfirmation) {
      return res.status(422).json({ message: 'Passwords do not match' });
    }
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (e) {
    next(e);
  }
};

const updateUser = (req, res, next) =>
  User.findById(req.params.id)
    .then((user) => user.set(req.body))
    .then((updatedUser) => res.status(200).json(updatedUser))
    .catch(next);

const deleteUser = (req, res, next) =>
  User.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).send('User was deleted'))
    .catch(next);

export {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
};
