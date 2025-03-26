import Note from "../../../database/models/note.model.js";

const createNote = async (req, res) => {
  const addedNote = await Note.create(req.body)
  return res.status(201).json({ message: "Note added successfully", addedNote });
}

const getNotes = async (req, res) => {
  const notes = await Note.find();
  return res.json({notes})
}

const getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  return res.json({note})
}


export { createNote, getNotes, getNote }