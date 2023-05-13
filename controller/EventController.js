const Event = require("../models/Events.js");

exports.allevents = async (req, res) => {
  const event = await Event.findAll();

  if (event.length > 0) {
    res.status(200).json(event);
  } else {
    res.status(404).json({ message: "Not Found Event" });
  }
};

exports.createEvent = async (req, res) => {
  let reqevents = req.body;

  await Event.create(reqevents)
    .then((success) => {
      res.status(200).json(success);
    })
    .catch((error) => {
      res.status(404).json({ message: `Error creating Event ${error}` });
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
  }).then((success) => {
    if (success > 0) {
      res.status(200).json(reqcomment);
    } else {
      res.status(404).json({ message: "Not Found Event" });
    }
  }).catch((error) => {
    res.status(404).json({ message:`error: ${error}` });
  })
};

exports.deleteEvent = async(req, res) => {
    let id_event = req.params.id_event;

    await Event.destroy({where: {id_event: id_event}})
    .then((success) => {
        if (success != 0){
            res.status(200).json({message: "Eliminado correctamente"})
        }else{
            res.status(404).json({message: "Not Found Event"})
        }
    }).catch((error) => {
        res.status(500).json(error)
    })
}
