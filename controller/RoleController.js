const Role = require('../models/Roles.js');

exports.allroles = async(req, res) => {

    const role = await Role.findAll();

    if(role.length > 0){
        res.status(200).json(role);
    }else{
        res.status(404).json({message: "Not Found Roles" })
    }
}

exports.createRole = async(req, res) =>{

    let reqrole = req.body;

    await Role.create(reqrole)
    .then((success) => {
        res.status(200).send(success)
    })
    .catch((error) => {
        res.status(500).json({message: `error creating role ${error}`})
    });
}

exports.onerole = async(req, res) => {
    let id_role = req.params.id_role;

    const role = await Role.findOne({
        where: {
            id_role : id_role,
        },
    });

    if(role){
        res.status(200).json(role);
    }else{
        res.status(404).json({message: "Role not found"})
    }
}

exports.updatedrole = async(req, res) => {
    let reqrole = req.body;
    let id_role = req.params.id_role;

    await Role.update(reqrole, {
        where: {
            id_role: id_role,
        }
    }).then((success) =>{
        if (success >0){
            res.status(200).json(reqrole);
        }else{
            res.status(404).json({message: "Not Found Role"});
        }
    }).catch((error) => {
        res.status(500).json({message: `Error updating role ${error}`})
    })
}

exports.deleterole = async(req, res) => {
    let id_role = req.params.id_role;

    await Role.destroy({where: {id_role: id_role}})
    .then((success) => {
        if(success != 0){
            res.status(200).json({message: 'Delete role'})
        }else{
            res.status(404).json({message: 'Role Not Found'})
        }
    }).catch((error) => {
        res.status(500).json({message: `error ${error}`})
    })
}