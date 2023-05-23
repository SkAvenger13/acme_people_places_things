const Sequelize = require('sequelize');
const {STRING, INTEGER} = Sequelize;
const db = new Sequelize(`postgres://localhost:5432/acme_people_place_things`);

const People = db.define("person", {
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

const Places = db.define("place", {
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

const Things = db.define("thing", {
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

Souvenir.belongsTo(People);
People.hasMany(Souvenir);

Souvenir.belongsTo(Places);
Places.hasMany(Souvenir);

Souvenir.belongsTo(Things);
Things.hasMany(Souvenir);

module.exports = {
    db,
    People,
    Places,
    Things,
    Souvenir
}