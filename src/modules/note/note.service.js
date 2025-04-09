import { createNoteRepository, searchNotesRepository } from "./note.repository.js";

export const searchNotesService = async (req, res, next) => {
  const { query } = req.query;
  try {
    const notes = await searchNotesRepository(query);
    if (notes.length === 0) {
      return res.status(204).json({ message: "No data found" })
    }

    return res.status(200).json({ notes })
  } catch (error) {
    next(error)
  }
}

export const createNoteService = async (req, res, next)=>{
  try {
    const addedNote = await createNoteRepository(req.body)
    return res.status(201).json({ message: "Note added successfully", addedNote });
  } catch (error) {
    next(error)
  }
}