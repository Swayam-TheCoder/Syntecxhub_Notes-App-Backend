const express = require('express');
const router = express.Router()

const { createNote, getnotes, getNotebyId, updateNote, archiveNote, getUserNotes } = require('../controllers/noteController');

router.post("/", createNote);
router.get("/", getnotes);
router.get("/:id", getNotebyId);
router.put("/:id", updateNote);
router.patch("/:id/archive", archiveNote);
router.get("/user/:userId", getUserNotes);

module.exports = router;