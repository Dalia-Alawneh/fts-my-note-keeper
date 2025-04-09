import {
  countDocumentRepository,
  createNoteRepository,
  getNotesRepository,
  getPaginatedNotesRepository,
  searchNotesRepository
} from "#modules/note/note.repository.js";

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

export const createNoteService = async (req, res, next) => {
  try {
    const addedNote = await createNoteRepository(req.body)
    return res.status(201).json({ message: "Note added successfully", addedNote });
  } catch (error) {
    next(error)
  }
}

export const getNotesService = async (req, res, next) => {
  let { limit, page } = req.query;
  try {
    if (limit && page) {
      const skip = (page - 1) * limit;
      const [notes, total] = await Promise.all([
        getPaginatedNotesRepository(limit, skip),
        countDocumentRepository()
      ])

      return res.json({ notes, limit, total })
    }

    const notes = await getNotesRepository();
    return res.json({ notes })
  } catch (error) {
    next(error)
  }
}