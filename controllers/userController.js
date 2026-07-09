const User = require('../models/User');

// Create User
const createUser = async(req, res) => {
  try{
    const { name, email } = req.body;

    if(!name || !email){
      return res.status(400).json({ message: "Please provide all provided fields"})
    }

    const existingUser = await User.findOne({ email });
    if(existingUser){
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ name, email })
    res.status(200).json({ message: "User created successfully", user })

  } catch(err){
    res.status(500).json({ message:err.message });
  }
}


module.exports = {createUser};