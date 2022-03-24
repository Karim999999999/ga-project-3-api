import User from '../models/user.js';

const getAllUsers = (req, res, next) =>
  User.find()
    .then(users => res.status(200).json(users))
    .catch(next);

const getUserById = (req, res, next) =>
  User.findById(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(next);

const createUser = (req, res, next) =>
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next);

const updateUser = (req, res, next) =>
  User.findById(req.params.id)
    .then(user => user.set(req.body))
    .then(updatedUser => res.status(200).json(updatedUser))
    .catch(next);

const deleteUser = (req, res, next) =>
  User.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).send('User was deleted'))
    .catch(next);

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
