import Note from "../../models/note.model.js";
import { searchNotesService } from "./note.service.js";
import { validateSearchQuery } from "./note.validator.js";

const createNote = async (req, res, next) => {
  try {
    const addedNote = await Note.create(req.body)
    return res.status(201).json({ message: "Note added successfully", addedNote });
  } catch (error) {
    next(error)
  }
}

const getNotes = async (req, res, next) => {
  let { limit, page } = req.query;
  try {
    if (limit && page) {
      limit = parseInt(limit);
      page = parseInt(page);

      if (isNaN(limit) || isNaN(page) || limit < 1 || page < 1) {
        return res.status(400).json({ error: "Invalid pagination parameters" });
      }

      const skip = (page - 1) * limit;
      const [notes, total] = await Promise.all([
        await Note.find().limit(limit).skip(skip),
        Note.countDocuments()
      ])
      return res.json({ notes, limit, total })
    }

    const notes = await Note.find();
    return res.json({ notes })
  } catch (error) {
    next(error)
  }
}

const getNote = async (req, res, next) => {
  const { id } = req.params;
  try {
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" })
    }

    return res.status(200).json({ note })
  } catch (error) {
    next(error)
  }
}

const deleteNote = async (req, res, next) => {
  const { id } = req.params;
  try {
    const note = await Note.findByIdAndDelete(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" })
    }

    return res.status(200).json({ message: "Note deleted successfully" })
  } catch (error) {
    next(error)
  }
}

const updateNote = async (req, res, next) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const note = await Note.findOneAndReplace(
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

const searchNote = async (req, res, next) => {
  const validateSearch = validateSearchQuery(req);
  if (!validateSearch.valid) {
    return res.status(400).json(validateSearch.errors)
  }

  searchNotesService(req, res, next)
}



export { createNote, getNotes, getNote, deleteNote, updateNote, partiallyUpdateNote, searchNote }