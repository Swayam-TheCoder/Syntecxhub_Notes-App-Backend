const express = require('express');
const router = express.Router()

const { createNote, getnotes, getNotebyId, updateNote, archiveNote, getUserNotes, getUserWithNotes } = require('../controllers/noteController');

router.post("/", createNote);
router.get("/", getnotes);
router.get("/user/:userId", getUserNotes);
router.get("/:id/notes", getUserWithNotes);
router.get("/:id", getNotebyId);
router.put("/:id", updateNote);
router.patch("/:id/archive", archiveNote);

module.exports = router;