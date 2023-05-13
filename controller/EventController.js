const { UUIDV4 } = require("sequelize");
const Event = require("../models/Events.js");
const multer = require("multer");

exports.allevents = async (req, res) => {
  const event = await Event.findAll();

  if (event.length > 0) {
    res.status(200).json(event);
  } else {
    res.status(404).json({ message: "Not Found Event" });
  }
};

exports.createEvent = async (req, res) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/uploads");
    },

    filename: (req, file, cb) => {
      //Esta funcion permite decide como se va a guardar la imagen
      cb(null, file.originalname);
    },
  });

  const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
      const filetypes = /jpeg|jpg|png/;
      const mimetype = filetypes.test(file.mimetype);

      if (mimetype) {
        return cb(null, true);
      }
      cb("Error tipo de imagen no valida");
    },
  });

  upload.single("imagen_event")(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: "Error creating image" + err });
    }

    let { description_event } = req.body;
    let imagen_event = req.file ? req.file.path : null;

    await Event.create({ imagen_event, description_event })
      .then((success) => {
        res.status(200).json(success);
      })
      .catch((error) => {
        res.status(404).json({ message: `Error creating Event ${error}` });
      });
  });
};

exports.oneevent = async (req, res) => {
  let id_event = req.params.id_event;

  const event = await Event.findOne({
    where: {
      id_event: id_event,
    },
  });

  if (event) {
    res.status(200).json(event);
  } else {
    res.status(404).json({ message: "Not Found Event" });
  }
};

exports.updateevents = async (req, res) => {
  let id_event = req.params.id_event;
  let reqcomment = req.body;

  await Event.update(reqcomment, {
    where: {
      id_event: id_event,
    },
  })
    .then((success) => {
      if (success > 0) {
        res.status(200).json(reqcomment);
      } else {
        res.status(404).json({ message: "Not Found Event" });
      }
    })
    .catch((error) => {
      res.status(404).json({ message: `error: ${error}` });
    });
};

exports.deleteEvent = async (req, res) => {
  let id_event = req.params.id_event;

  await Event.destroy({ where: { id_event: id_event } })
    .then((success) => {
      if (success != 0) {
        res.status(200).json({ message: "Eliminado correctamente" });
      } else {
        res.status(404).json({ message: "Not Found Event" });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
