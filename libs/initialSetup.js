const Role = require('../models/Roles.js')

exports.createRoles = async () => {
    try {
        const count = await Role.count();

        if(count>0) return;
        const values = await Promise.all([
            Role.create({name_role : 'aprendiz'}),
            Role.create({name_role : 'enfermero'}),
            Role.create({name_role : 'psicologo'}),
        ])

        console.log(values);

    } catch (error) {
        console.error(error);
    }
}