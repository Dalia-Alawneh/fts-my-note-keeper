import Note from "#models/note.model.js";
import { createNoteService, deleteNoteService, getNoteService, getNotesService, searchNotesService, updateNoteService } from "#modules/note/note.service.js";
import { checkValidation } from "#modules/note/note.validator.js";


const createNote = (req, res, next) => {
  createNoteService(req, res, next);
}

const getNotes = (req, res, next) => {
  const validateSearch = checkValidation(req);
  if (!validateSearch.valid) {
    return res.status(400).json(validateSearch.errors)
  }

  getNotesService(req, res, next)
}

const getNote = getNoteService;

const deleteNote = deleteNoteService;

const updateNote = updateNoteService;

const partiallyUpdateNote = async (req, res, next) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const note = await Note.findOneAndUpdate(
      { _id: id },
      { title, content },
      { new: true }
    );
    if (!note) {
      return res.status(404).json({ message: "Note not found" })
    }

    return res.status(200).json({ message: "Note updated successfully", note })
  } catch (error) {
    next(error)
  }
}

const searchNote = (req, res, next) => {
  const validateSearch = checkValidation(req);
  if (!validateSearch.valid) {
    return res.status(400).json(validateSearch.errors)
  }

  searchNotesService(req, res, next)
}



export { createNote, getNotes, getNote, deleteNote, updateNote, partiallyUpdateNote, searchNote }