const Comment = require('../models/Comments.js');


exports.allcomments = async(req, res) => {

    const comments = await Comment.findAll();

    if (comments.length > 0){
        res.status(200).json(comments);
    }else{
        res.status(400).json({message: "Not Found Comments"});
    }
}

exports.createComment = async(req, res) => {

    let reqcomment = req.body;

    await Comment.create(reqcomment)
    .then((success) => {
        res.status(200).json({message: success});
    })
    .catch((error) => {
        res.status(500).json({message: `error creating comment ${error}`});
    })
}

exports.oneComment = async(req, res) => {
    let id_comments = req.params.id_comments;

    const comment = await Comment.findOne({
        where: {
            id_comments: id_comments,
        },
    });

    if (comment){
        res.status(200).json(comment);
    }else{
        res.status(404).json({message: "Not found comment"})
    }
};

exports.updatedcomment = async(req, res) => {
    let id_comments = req.params.id_comments;
    let reqcomment = req.body

    await Comment.update(reqcomment, {
        where: {
            id_comments: id_comments
        },
    }).then((success) => {
        if (success > 0){
            res.status(200).json(reqcomment);
        }else{
            res.status(404).json({message: "Not found comment"});
        }
    })
    .catch((error) => {
        res.status(500).json({message: `Error updating comment ${error}`});
    })
};

exports.deleteComment = async(req, res) => {
    let id_comments = req.params.id_comments;

    await Comment.destroy({
        where: {
            id_comments: id_comments
        }
    }).then(success => {
        if (success != 0){
            res.status(200).json({message: "Comment deleted"});
        }else{
            res.status(200).json({message: "No existe la asignatura "})
        }
    }).catch((error) =>{
        res.status(500).json(error);
    })
}

