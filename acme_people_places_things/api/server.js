const express = require('express');
const server = express();
const override = require("method-override");

const {db, Person, Place, Thing, Souvenir} = require('./db');

const getHTMLPage = require('../views/getHTML');

server.use(express.static('public'));
server.use(express.urlencoded({extended: true}));
server.use(override("_method"));

server.get('/', async (req, res) => {
    try {
        const [people, places, things, souvenirs] = await Promise.all([
            Person.findAll(),
            Place.findAll(),
            Thing.findAll(),
            Souvenir.findAll({
                include: [
                    Person,
                    Place,
                    Thing
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
        await Souvenir.create(req.body);
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Failed to post to database.", error});
    }
});

server.delete("/:id", async (req, res) => {
    try {
        const souvy = await Souvenir.findByPk(req.params.id);
        if (souvy) {
            souvy.destroy();
        }
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Failed to delete entry.", error});
    }
});

module.exports = server;