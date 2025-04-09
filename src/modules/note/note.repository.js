import Note from "#models/note.model.js";

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

export const getPaginatedNotesRepository = async (limit, skip) => {
  return await Note.find().limit(limit).skip(skip);
}

export const countDocumentRepository = () => {
  return Note.countDocuments();
}

export const getNotesRepository = async ()=> {
  return await Note.find();
}
export const getNoteByIdRepository = async (id)=> {
  return await Note.findById(id);
}