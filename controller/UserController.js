const User = require('../models/User.js');


exports.allUsers = async (req, res) => {

    const users = await User.findAll();

    if (users.length > 0) {
        res.status(200).json(users);
    } else {
        res.status(400).json({ message: "Not Found Users" });
    }
};

exports.oneUser = async (req, res) => {
    let id_user = req.params.id_user;

    const user = await User.findOne({
        where: {
            id_user: id_user,
        },
    });

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "Not found  user" })
    }
};

exports.createUser = async (req, res) => {
    let requser = req.body;
    await User.create(requser)
        .then((success) => {
            res.status(200).json({ message: success });
        })
        .catch((error) => {
            res.status(500).json({ message: `error creating user ${error}` });
        });
};



exports.updatedUser = async (req, res) => {
    let id_user = req.params.id_user;
    let reqUser = req.body

    await User.update(reqUser, {
        where: {
            id_user: id_user
        },
    }).then((success) => {
        if (success > 0) {
            res.status(200).json(reqUser);
        } else {
            res.status(404).json({ message: "Not found user" });
        }
    })
        .catch((error) => {
            res.status(500).json({ message: `Error updating user ${error}` });
        })
};

exports.deleteUser = async (req, res) => {
    let id_user = req.params.id_user;

    await User.destroy({
        where: {
            id_user: id_user
        }
    }).then(success => {
        if (success != 0) {
            res.status(200).json({ message: "User deleted" });
        } else {
            res.status(200).json({ message: "User does not exist " })
        }
    }).catch((error) => {
        res.status(500).json(error);
    })
};


