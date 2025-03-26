import Note from "../../../database/models/note.model.js";

const createNote = async (req, res) => {
  try {
    const addedNote = await Note.create(req.body)
    return res.status(201).json({ message: "Note added successfully", addedNote });
  } catch (e) {
    console.error("Error creating note:", e);

    return res.status(500).json({ message: "Failed to add note", error: e.message });
  }
}

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    return res.json({ notes })
  } catch (e) {
    console.error("Error fetching notes:", e);

    return res.status(500).json({ message: "Failed to fetch notes", error: e.message });
  }
}

const getNote = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" })
    }

    return res.status(200).json({ note })
  } catch (e) {
    console.error("Error fetching note:", e);

    return res.status(500).json({ message: "Failed to fetch note", error: e.message });
  }
}

const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findByIdAndDelete(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" })
    }

    return res.status(200).json({ message: "Note deleted successfully" })
  } catch (e) {
    console.error("Error fetching note:", e);

    return res.status(500).json({ message: "Failed to fetch note", error: e.message });
  }
}

const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const note = await Note.findOneAndReplace(
      { _id: id },
      { title, content },
      { new: true }
    );
    if (!note) {
      return res.status(404).json({ message: "Note not found" })
    }

    return res.status(200).json({ message: "Note updated successfully", note })
  } catch (e) {
    console.error("Error fetching note:", e);

    return res.status(500).json({ message: "Failed to fetch note", error: e.message });
  }
}

const partiallyUpdateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const note = await Note.findOneAndUpdate(
      { _id: id },
      { title, content },
      { new: true }
    );
    if (!note) {
      return res.status(404).json({ message: "Note not found" })
    }

    return res.status(200).json({ message: "Note updated successfully", note })
  } catch (e) {
    console.error("Error fetching note:", e);

    return res.status(500).json({ message: "Failed to fetch note", error: e.message });
  }
}


export { createNote, getNotes, getNote, deleteNote, updateNote, partiallyUpdateNote }