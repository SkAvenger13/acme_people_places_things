module.exports = (people, places, things, souvenirs) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/style.css" />
            <title>Acme Souvenirs</title>
        </head>
        <body>
            <h1>Acme People, Places, and Things</h1>
            <div id="people">
                <h2>People</h2>
                <ul>
                    ${people.map(person => {
                        return `<li>${person.name}</li>`;
                    }).join('')}
                </ul>
            </div>
            <div id="places">
                <h2>Places</h2>
                <ul>
                    ${places.map(place => {
                        return `<li>${place.name}</li>`;
                    }).join('')}
                </ul>
            </div>
            <div id="things">
                <h2>Things</h2>
                <ul>
                    ${things.map(thing => {
                        return `<li>${thing.name}</li>`;
                    }).join('')}
                </ul>
            </div>
            <div id="souvenirs">
                <h2>Souvenir Purchases</h2>
                <ul>
                    ${souvenirs.map(souvenir => {
                        return `<li>${souvenir.person.name} purchased a ${souvenir.thing.name} in ${souvenir.place.thing}</li>`;
                    }).join('')}
                </ul>
            </div>
        </body>
        </html>
    `
};