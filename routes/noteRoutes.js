const express = require('express');
const router = express.Router()

const { createNote, getnotes, getNotebyId, updateNote, archiveNote } = require('../controllers/noteController');

router.post("/", createNote);
router.get("/", getnotes);
router.get("/:id", getNotebyId);
router.put("/:id", updateNote);
router.patch("/archive/:id", archiveNote);

module.exports = router;