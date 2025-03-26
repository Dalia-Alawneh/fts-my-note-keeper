import { Router } from "express";
import { createNote, deleteNote, getNote, getNotes, partiallyUpdateNote, updateNote } from "./note.controller.js";

const router = Router();
router.post('/', createNote);
router.get('/', getNotes);
router.get('/:id', getNote);
router.delete('/:id', deleteNote);
router.put('/:id', updateNote);
router.patch('/:id', partiallyUpdateNote);

export default router;