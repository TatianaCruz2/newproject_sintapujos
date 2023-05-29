const User = require("../models/User.js");
const jwt = require("jsonwebtoken");
const config = require("../env.js");
const Role = require("../models/Roles.js");
const { Sequelize, Op } = require("sequelize");

exports.signup = async (req, res) => {
  try {
    let {
      name_user,
      last_name_user,
      document_type_user,
      document_number_user,
      phone_user,
      birthdate_user,
      email_user,
      password_user,
      number_ficha_user,
      rol_id,
    } = req.body;
  
    const newUser = await User.create({
      name_user,
      last_name_user,
      document_type_user,
      document_number_user,
      phone_user,
      birthdate_user,
      email_user,
      password_user: await User.encryptpassword(password_user),
      number_ficha_user,
      rol_id
    });
  
    if(rol_id){
      const foundRoles = await Role.findAll({
        where: {
          name_role: rol_id
        }
      });
      console.log(rol_id);
      newUser.rol_id = foundRoles.map(role => role.id_role)
    }else{
      const role = await Role.findOne({
        where: {
          name_role : "aprendiz"
        }
      })
      newUser.rol_id = [role.id_role];
    }
  
    if (newUser) {
      let token = jwt.sign({ id: newUser.id }, config.SECRET, {
        expiresIn: 86400, //24hours
      });
  
      res.status(200).json({ token });
    }
  
   
    console.log(newUser);
  } catch (error) {
    res.json( {error: ` aaaaaaaaaaaaaaaaaaaaaaaa ${error}`})
    console.log(error);
  }
};

exports.signin = async (req, res) => {
  const userFound = await User.findOne({
    where:
     {email_user: req.body.email_user},
    })

  if(!userFound){
    res.status(404).json({message: "User not found"})
  }else{
    console.log(userFound)
  }

  const matchPassword = await User.comparePassword(req.body.password_user, userFound.password_user);

  if(!matchPassword){
    res.status(404).json({token: null, message: "Invalid password"})
  }

  const token = jwt.sign({id: userFound.id_user}, config.SECRET, {
    expiresIn: 86400
  })

  res.json({token})

};
