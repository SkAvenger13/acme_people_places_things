const {db, People, Places, Things, Souvenir} = require("./db");

const syncAndSeed = async () => {
    try {
        await db.sync({force: true});
        const [moe, larry, luch, ethyl] = await Promise.all([
            People.create({name: 'moe'}),
            People.create({name: 'larry'}),
            People.create({name: 'lucy'}),
            People.create({name: 'ethyl'})
        ]);
        const [paris, nyc, chicago, london] = await Promise.all([
            Places.create({name: 'paris'}),
            Places.create({name: 'nyc'}),
            Places.create({name: 'chicago'}),
            Places.create({name: 'london'})
        ]);
        const [hat, bag, shirt, cup] = await Promise.all([
            Things.create({name: 'hat'}),
            Things.create({name: 'bag'}),
            Things.create({name: 'shirt'}),
            Things.create({name: 'cup'})
        ]);
        await Promise.all([
            Souvenir.create({
                personId: moe.id,
                placeId: london.id,
                thingId: hat.id
            }),
            Souvenir.create({
                personId: moe.id,
                placeId: paris.id,
                thingId: bag.id
            }),
            Souvenir.create({
                personId: ethyl.id,
                placeId: nyc.id,
                thingId: shirt.id
            }),
        ])
        db.close();
    } catch (error) {
        console.log(error);
        db.close();
    }

};

syncAndSeed();