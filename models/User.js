const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
},
{
  // enabled virtuals
   timestamps:true,
   toJSON:{virtuals:true},
   toObject:{virtuals:true}
});

// Virtual populate: fetch related documents across collections without physically storing those reference IDs
userSchema.virtual("notes", {
    ref: "Note",
    localField: "_id",
    foreignField: "user"
});

module.exports = mongoose.model("User", userSchema);