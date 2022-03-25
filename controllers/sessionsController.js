import Sessions from '../models/sessions';

const getAllSessionsPrivate = async (req, res, next) => {
  try {
    if (req.currentUser.isAdmin || req.currentUser.isCoach) {
      const sessions = await Sessions.find();
      return res.status(200).json(sessions);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};

const getAllSessionsForCoachPrivate = async (req, res, next) => {
  try {
    if (req.currentUser.isAdmin || req.currentUser.isCoach) {
      const sessions = await Sessions.find({ coach: req.params.coachId });
      return res.status(200).json(sessions);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};

const getSessionsByStatusPrivate = async (req, res, next) => {
  try {
    if (req.currentUser.isAdmin || req.currentUser.isCoach) {
      const sessions = await Sessions.find({ status: req.params.statusquerry });
      return res.status(200).json(sessions);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};
const getSessionBySessionIdPrivate = async (req, res, next) => {
  try {
    if (req.currentUser.isAdmin || req.currentUser.isCoach) {
      const session = await Sessions.findById(req.params.id);
      return res.status(200).json(session);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};
const editSessionByIdPrivate = async (req, res, next) => {
  try {
    if (req.currentUser.isAdmin || req.currentUser.isCoach) {
      const session = await Sessions.findById(req.params.id);
      session.set(req.body);

      const savedSession = await session.save();
      return res.status(200).json(savedSession);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};

const deleteSessionPrivate = async (req, res, next) => {
  try {
    if (req.currentUser.isAdmin || req.currentUser.isCoach) {
      const session = await Sessions.findByIdAndDelete(req.params.id);
      return res.status(200).json(session);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};
const searchForSessionByDatePrivate = async (req, res, next) => {
  try {
    if (req.currentUser.isAdmin || req.currentUser.isCoach) {
      const sessions = await Sessions.find({
        dateAndTime: req.params.dateTimeQuery,
      });
      return res.status(200).json(sessions);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};
export default {
  getAllSessionsPrivate,
  getAllSessionsForCoachPrivate,
  getSessionsByStatusPrivate,
  getSessionBySessionIdPrivate,
  editSessionByIdPrivate,
  deleteSessionPrivate,
  searchForSessionByDatePrivate,
};
