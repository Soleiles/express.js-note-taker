const router = require('express').Router();
const fs = require('fs');
const util = require('util');
const noteData = require('../../db/db.json');
const uuid = require('../../helpers/uuid');

const readFromFile = util.promisify(fs.readFile)
// ****** GET Route for existing notes ****** //
router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

// ****** POST Route for new note ******* // 
router.post('/notes', (req, res) => {
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid()
        };
        noteData.push(newNote);
        const noteString = JSON.stringify(noteData);

        fs.writeFile(`./db/db.json`, noteString, (err) =>
            err
            ? console.log(err)
            : console.log(`Note successfully saved`)
        );

        const response = {
            status: 'success',
            body: newNote
        };

        console.log(response);
        res.status(201).json(response);
    } else {
        res.status(500).json('Error posting note.')
    }
});

module.exports = router;