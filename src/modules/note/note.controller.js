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
  try{
    const notes = await Note.find();
    return res.json({ notes })
  }catch(e){
    console.error("Error fetching notes:", e);

    return res.status(500).json({ message: "Failed to fetch notes", error: e.message });
  }
}

const getNote = async (req, res) => {
  try{
    const note = await Note.findById(req.params.id);
    if(!note){
      return res.status(404).json({message: "Note not found"})
    }

    return res.status(200).json({ note })
  }catch(e){
    console.error("Error fetching note:", e);

    return res.status(500).json({ message: "Failed to fetch note", error: e.message });
  }
}


export { createNote, getNotes, getNote }