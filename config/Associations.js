const rol = require ("../models/Roles.js");
const user = require ("../models/User.js");


/////////////////////////Rol_User////////////////////////////////////////
 rol.hasMany(user, {foreignKey: "id_user"}); //un rol pude tener muchos usuarios
 user.belongsTo(rol, {foreignKey: "id_user"}); // un usuario pertenece a un rol

 




 module.exports =  {
    rol,
    user,
 };

