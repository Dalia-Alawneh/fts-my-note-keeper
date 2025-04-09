import { createNoteService, deleteNoteService, getNoteService, getNotesService, partiallyUpdateNoteService, searchNotesService, updateNoteService } from "#modules/note/note.service.js";


const createNote = (req, res, next) => {
  createNoteService(req, res, next);
}

const getNotes = getNotesService;

const getNote = getNoteService;

const deleteNote = deleteNoteService;

const updateNote = updateNoteService;

const partiallyUpdateNote = partiallyUpdateNoteService;

const searchNote = searchNotesService;



export { createNote, getNotes, getNote, deleteNote, updateNote, partiallyUpdateNote, searchNote }