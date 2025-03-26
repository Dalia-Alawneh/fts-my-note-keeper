import { Router } from "express";
import { createNote, getNote, getNotes } from "./note.controller.js";

const router = Router();
router.post('/', createNote);
router.get('/', getNotes);
router.get('/:id', getNote);

export default router;