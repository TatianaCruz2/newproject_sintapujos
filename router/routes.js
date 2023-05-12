const router = require('express').Router();

const CommentController = require('../controller/CommentController.js');

router.get('/comments', CommentController.allcomments);
router.get('/comments/:id_comments', CommentController.oneComment);
router.post('/comments', CommentController.createComment)
router.put('/comments/:id_comments', CommentController.updatedcomment)
router.delete('/comments/:id_comments', CommentController.deleteComment)

module.exports = router;