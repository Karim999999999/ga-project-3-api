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

router.route('/articles').get(getArticles).post(secureRoute, createArticle);

router
  .route('/articles/:id')
  .get(getArticleById)
  .put(updateArticle)
  .delete(deleteArticle);

router.route('/users').get(getAllUsers);
router.route('/register').post(createUser);
router.route('/login').post(loginUser);
router.route('/users/:id').get(getUserById).put(updateUser).delete(deleteUser);

// Router For Athletes
import {
  getAllAthletesPrivate,
  getApprovedAthletesPublic,
  getAthletesByStatusPrivate,
  getAthletesByIdPrivate,
  getAthletesByIdPublic,
  editAthleteDetailsbyIdPrivate,
  deleteAthletePrivate,
  getAthletesAttendancePrivate,
  getAthletesMedicalIncidentsPrivate,
  createNewAthlete,
} from '../controllers/athleteController.js';

router
  .route('/athletes')
  .get(secureRoute, getAllAthletesPrivate)
  .post(createNewAthlete);
router.route('/approved-athletes').get(getApprovedAthletesPublic);
router
  .route('/athletes/stat/:status')
  .get(secureRoute, getAthletesByStatusPrivate);
router
  .route('/athlete/:id')
  .get(secureRoute, getAthletesByIdPrivate)
  .put(secureRoute, editAthleteDetailsbyIdPrivate)
  .delete(secureRoute, deleteAthletePrivate);

router.route('/approved-athlete/:id').get(getAthletesByIdPublic);

router
  .route('/athlete/:id/medical-incidents')
  .get(secureRoute, getAthletesMedicalIncidentsPrivate);
router
  .route('/athlete/:id/attendance')
  .get(secureRoute, getAthletesAttendancePrivate);

// Router For Medical Incidents

import {
  registerNewMedicalIncidentPrivate,
  editMedicalIncidentByIDPrivate,
  getMedicalIncidentByIDPrivate,
  deleteMedicalIncidentPrivate,
} from '../controllers/medicalIncidentsController.js';

router
  .route('/athlete/:id/medical-incident/')
  .post(registerNewMedicalIncidentPrivate);
router
  .route('/athlete/:id/medical-incident/:medicalIncidentId')
  .put(editMedicalIncidentByIDPrivate)
  .get(getMedicalIncidentByIDPrivate)
  .delete(deleteMedicalIncidentPrivate);
// Router For Photos

// Router For Sessions
import {
  getAllSessionsPrivate,
  getAllSessionsForCoachPrivate,
  getSessionsByStatusPrivate,
  getSessionBySessionIdPrivate,
  editSessionByIdPrivate,
  deleteSessionPrivate,
} from '../controllers/sessionsController.js';

router.route('/sessions').get(getAllSessionsPrivate);
router.route('/sessions/coach/:coachId').get(getAllSessionsForCoachPrivate);
router.route('/sessions/status/:statusquerry').get(getSessionsByStatusPrivate);
router
  .route('/sessions/:id')
  .get(getSessionBySessionIdPrivate)
  .put(editSessionByIdPrivate)
  .delete(deleteSessionPrivate);
export default router;
