const router = require('express').Router();

const CommentController = require('../controller/CommentController.js');
const ReportController = require('../controller/ReportController.js');
const UserController = require('../controller/UserController.js');

/////////////////////////Coment////////////////////////////////////////

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


module.exports = router;