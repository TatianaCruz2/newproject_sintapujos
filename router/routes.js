const router = require('express').Router();

const CommentController = require('../controller/CommentController.js');
const ReportController = require('../controller/ReportController.js');
const UserController = require('../controller/UserController.js');
const EventController = require('../controller/EventController.js');
const RoleController = require('../controller/RoleController.js');
///////////////////////////Comments//////////////////////////////

router.get('/comments', CommentController.allcomments);
router.get('/comments/:id_comments', CommentController.oneComment);
router.post('/comments', CommentController.createComment)
router.put('/comments/:id_comments', CommentController.updatedcomment);
router.delete('/comments/:id_comments', CommentController.deleteComment);

/////////////////////////Reports////////////////////////////////////////

router.get('/reports', ReportController.allReports);
router.post('/reports', ReportController.createReport);
router.get('/reports/:id_report', ReportController.oneReport);
router.put('/reports/:id_report', ReportController.updatedReport);
router.delete('/reports/:id_report', ReportController.deleteReport);

/////////////////////////Users////////////////////////////////////////

router.get('/users', UserController.allUsers);
router.get('/users/:id_user', UserController.oneUser);
router.post('/users', UserController.createUser);
router.put('/users/:id_user', UserController.updatedUser);
router.delete('/users/:id_user', UserController.deleteUser);



////////////////////////////Events////////////////////////////////

router.get('/event', EventController.allevents);
router.post('/event', EventController.createEvent);
router.get('/event/:id_event', EventController.oneevent);
router.put('/event/:id_event', EventController.updateevents);
router.delete('/event/:id_event', EventController.deleteEvent);

/////////////////////////Roles////////////////////////////////////////

router.get('/role', RoleController.allroles);
router.post('/role', RoleController.createRole);
router.get('/role/:id_role', RoleController.onerole);
router.put('/role/:id_role', RoleController.updatedrole);
router.delete('/role/:id_role', RoleController.deleterole);





module.exports = router;