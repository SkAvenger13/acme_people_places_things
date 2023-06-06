const Sequelize = require('sequelize');
const {STRING, INTEGER} = Sequelize;
const db = new Sequelize(`postgres://localhost:5432/acme_people_place_things`,
    {logging: false});

const Person = db.define("person", {
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

const Place = db.define("place", {
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

const Thing = db.define("thing", {
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

const Souvenir = db.define("souvenir", {

});

Souvenir.belongsTo(Person);
Person.hasMany(Souvenir);

Souvenir.belongsTo(Place);
Place.hasMany(Souvenir);

Souvenir.belongsTo(Thing);
Thing.hasMany(Souvenir);

module.exports = {
    db,
    Person,
    Place,
    Thing,
    Souvenir
}