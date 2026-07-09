const User = require('../models/User');
const Note = require('../models/Note');

const createNote = async(req, res) => {
  try{
    const {title, content, userId } = req.body;

    if(!title || !content || !userId){
      return res.status(400).json({ message:"Please provide all fields" });
    }

    const user = await User.findById(userId);
    res.status(404).json({ message: "User not found" });

    const note = await Note.create({ title, content, user: userId });
    res.status(201).json({ message: "Note created successfully", note });
  } catch(err){
    res.status(400).json(err.message);
  }
}

module.exports = createNote;