const User = require("../models/User.js");
const jwt = require("jsonwebtoken");
const config = require("../env.js");

exports.signup = async (req, res) => {
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
  });


  if (newUser) {
    let token = jwt.sign({ id: newUser.id }, config.SECRET, {
      expiresIn: 86400, //24hours
    });

    res.status(200).json({ token });
  }


  console.log(newUser);
};

exports.signin = async (req, res) => {};
