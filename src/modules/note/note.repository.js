import Note from "../../models/note.model.js";

export const searchNotesRepository = async (query) => {
  return await Note.find({
    $or: [
      { title: { $regex: query, $options: 'i' } },
      { content: { $regex: query, $options: 'i' } },
    ]
  });
}

export const createNoteRepository = async (requestBody) => {
  return await Note.create(requestBody);
}