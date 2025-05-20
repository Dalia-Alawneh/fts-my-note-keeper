import { Router } from "express";
import {
  createNote, deleteNote,
  getNote, getNotes,
  partiallyUpdateNote, searchNote, updateNote
} from "#modules/note/note.controller.js";
import errorHandler from "#middlewares/errorHandler.js";
import validate, { requestExpressValidator } from "#validation/index.js";
import { noteIdSchema, noteSchema, partialNoteSchema } from "#validation/schemas.js";
import { validateNotePagination, validateSearchQuery } from "#modules/note/note.validator.js";

const router = Router();
router.post('/', validate([{ schema: noteSchema, target: 'body' }]), createNote);
router.get('/search', validateSearchQuery, requestExpressValidator, searchNote);
router.get('/', validateNotePagination, requestExpressValidator, getNotes);
router.get('/:id', validate([{ schema: noteIdSchema, target: 'params' }]), getNote);
router.delete('/:id', validate([{ schema: noteIdSchema, target: 'params' }]), deleteNote);
router.put(
  '/:id',
  validate([
    { schema: noteIdSchema, target: 'params' },
    { schema: noteSchema, target: 'body' }
  ]),
  updateNote
);

router.patch('/:id',
  validate([
    { schema: noteIdSchema, target: 'params' },
    { schema: partialNoteSchema, target: 'body' }
  ]), partiallyUpdateNote);

router.use(errorHandler);
export default router;