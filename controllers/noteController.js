const User = require('../models/User');
const Note = require('../models/Note');

const createNote = async(req, res) => {
  try{
    const {title, content, userId } = req.body;

    if(!title || !content || !userId){
      return res.status(400).json({ message:"Please provide all fields" });
    }

    const user = await User.findById(userId);
    if(!user){
      return res.status(404).json({ message: "User not found" });
    }
    
    const note = await Note.create({ title, content, user: userId });
    res.status(201).json({ message: "Note created successfully", note });
  } catch(err){
    res.status(400).json(err.message);
  }
}

const getnotes = async(req, res) => {
  try{
    const notes = await Note.find({ archieved: false }).populate("user", "name email")
    res.status(200).json(notes);
  } catch(err){
    res.status(500).json({ message:err.message })
  }
}

const getNotebyId = async(req, res) => {
  try{
    const notes = await Note.findById(req.param.id).populate("user", "name email");
    if(!notes){
      return res.status(500).json({ message: "Notes not found" });
    }
    res.status(200).json(notes);
  } catch(err){
    res.status(500).json({ message: err.message });
  }
}

const updateNote = async(req, res) => {
  try{
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { returnDocument: "after" })

    if(!note){
      return res.status(500).json({ message: "Notes not found" })
    }

    res.status(200).json({ message: "Notes Updated Successfully",note})

  } catch(err){
    res.status(500).json({ message: err.message})
  }
}

const archiveNote = async(req, res) => {
  try{
    const note = await Note.findByIdAndUpdate(req.params.id, {archieved: true}, {returnDocument: "after"})

    if(!note){
      return res.status(404).json({ message: "Notes not found"});
    }

    res.status(200).json({message: "Notes archived successfully",note});
  } catch(err){
    res.status(500).json({ message: err.message})
  }
}

const getUserNotes = async(req, res) => {
  try{
    const notes = await Note.find({ user: req.params.userId, archived: false})
    res.status(200).json(notes);
  } catch(err){
    res.status(500).json({message: error.message});
  }
}

module.exports = { createNote, getnotes, getNotebyId, updateNote, archiveNote, getUserNotes};