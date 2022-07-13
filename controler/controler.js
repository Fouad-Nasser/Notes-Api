const { send, json } = require('express/lib/response');
const generator = require('../util/generator');
const memStorage = require('../util/storage');
const model = require('../model/note_model')

exports.getAllNotes = (req,res)=>{
    const values = memStorage.getValues(memStorage.Store); 
    res.send('get all notes...'+JSON.stringify(values));
}

exports.saveNote = (req,res)=>{
    const seqID = generator.generate();
    const title = req.body.title;
    const content = req.body.content;
    if(!title || !content){
        return res.status(500).send({error: 'Title and Content should not be empty'})
    }
    const createdBy = "admin";
    const createdOn = new Date();

    const Note = model.Note;
    const noteObj = new Note(seqID,title,content,createdBy,createdOn);
    memStorage.Store.setItem(seqID,noteObj);

    res.status(201).send('save note successfuly...')
}

exports.updateNote = (req,res)=>{
    const seqID = req.body.seqID;
    if(!seqID){
        return res.status(500).send({error: 'seq should not be empty'})
    }
    const note = memStorage.Store.getItem(seqID);
    if(!note){
        return res.status(500).send({error: 'note is not found'})
    }
    const title = req.body.title;
    const content = req.body.content;
    if(!title || !content){
        return res.status(500).send({error: 'Title and Content should not be empty'})
    }
    const createdBy = "admin";
    const createdOn = new Date();

    const Note = model.Note;
    const noteObj = new Note(seqID,title,content,createdBy,createdOn);
    memStorage.Store.setItem(seqID,noteObj);

    res.status(201).send('update note successfuly...')
}

exports.deleteNote = (req,res)=>{
    const seqID = req.params.noteId;
    if(!seqID){
        return res.status(500).send({error: 'seq should not be empty'})
    }
    const note = memStorage.Store.getItem(seqID);
    if(!note){
        return res.status(500).send({error: 'note is not found'})
    }

    memStorage.Store.removeItem(seqID);

    res.status(200).send('delete note successfuly...')
}