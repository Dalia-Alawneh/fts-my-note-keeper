import { Router } from "express";
import { createNote, deleteNote, getNote, getNotes, partiallyUpdateNote, updateNote } from "./note.controller.js";
import errorHandler from "../../middlewares/errorHandler.js";

const router = Router();
router.post('/', createNote);
router.get('/', getNotes);
router.get('/:id', getNote);
router.delete('/:id', deleteNote);
router.put('/:id', updateNote);
router.patch('/:id', partiallyUpdateNote);

router.use(errorHandler); 
export default router;