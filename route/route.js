const express = require('express');
const route = express.Router();
const CTR = require('../controler/controler');

route.get('/api/notes',CTR.getAllNotes);
route.post('/api/notes/save',CTR.saveNote);
route.put('/api/notes/update',CTR.updateNote);
route.delete('/api/notes/delete/:noteId',CTR.deleteNote);

module.exports = route;

