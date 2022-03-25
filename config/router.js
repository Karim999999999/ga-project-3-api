import express from 'express';
import secureRoute from '../middleware/secureRoute.js';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
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

router.route('/users').get(getAllUsers);
router.route('/register').post(createUser);
router.route('/login').put(loginUser);
router.route('/users/:id').get(getUserById).put(updateUser).delete(deleteUser);

// Router For Articles
import {
  getAllAthletesPrivate,
  getApprovedAthletesPublic,
  getAthletesByStatusPrivate,
  getAthletesByIdPrivate,
  getAthletesByIdPublic,
  editAthleteDetailsbyIdPrivate,
  deleteAthletePrivate,
  getAthletesAttendancePrivate,
  searchAthleteByNameApprovedAthletesPublic,
  searchAthleteByNameAllAthletesPrivate,
  getAthletesMedicalIncidentsPrivate,
  createNewAthlete,
} from '../controllers/athleteController.js';

router
  .route('/athlete')
  .get(secureRoute, getAllAthletesPrivate)
  .post(createNewAthlete);
router.route('/approved-athlete').get(getApprovedAthletesPublic);
router.route('/athlete/:status').get(secureRoute, getAthletesByStatusPrivate);
router
  .route('/athlete/:id')
  .get(secureRoute, getAthletesByIdPrivate)
  .get(getAthletesByIdPublic)
  .put(secureRoute, editAthleteDetailsbyIdPrivate)
  .delete(secureRoute, deleteAthletePrivate);
router
  .route('/approved-athlete/name/:searchName')
  .get(secureRoute, searchAthleteByNameAllAthletesPrivate)
  .get(searchAthleteByNameApprovedAthletesPublic);
router
  .route('/athlete/:id/medical-incidents')
  .get(secureRoute, getAthletesMedicalIncidentsPrivate);
router
  .route('/athlete/:id/attendance')
  .get(secureRoute, getAthletesAttendancePrivate);

// Router For Athletes

// Router For Medical Incidents

// Router For Photos

// Router For Sessions

export default router;
