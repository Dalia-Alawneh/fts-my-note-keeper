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

export const countDocumentRepository = async () => {
  return await Note.countDocuments();
}

export const getNotesRepository = async () => {
  return await Note.find();
}

export const getNoteByIdRepository = async (id) => {
  return await Note.findById(id);
}

export const deleteNoteRepository = async (id) => {
  return await Note.findByIdAndDelete(id);
}

export const updateNoteRepository = async (id, body) => {
  return await Note.findOneAndReplace(
    { _id: id },
    { ...body },
    { new: true }
  );;
}

export const partiallyUpdateNoteRepository = async (id, body) =>{
  return await Note.findOneAndUpdate(
    { _id: id },
    { title, content },
    { new: true }
  );
}