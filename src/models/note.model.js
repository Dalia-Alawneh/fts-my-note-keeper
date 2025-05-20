import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: String,
  color: {
    type: String,
    default: "#D3D3D3",
  },
}, {
  timestamps: true
});

const Note = mongoose.model('Note', NoteSchema);
export default Note;