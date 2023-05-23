const express = require('express');
const server = express();
const {db, People, Places, Things, Souvenir} = require('./db');
const getHTMLPage = require('./getHTML');

server.use(express.static('public'));
server.use(express.urlencoded({extended: true}));

server.get('/', async (req, res) => {
    try {
        const [people, places, things, souvenirs] = await Promise.all([
            People.findAll(),
            Places.findAll(),
            Things.findAll(),
            Souvenir.findAll({
                include: [
                    People,
                    Places,
                    Things
                ]
            })
        ]);
        res.send(getHTMLPage(people, places, things, souvenirs));
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Failed to access database.", error});
    }
});

server.post('/', async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

module.exports = server;