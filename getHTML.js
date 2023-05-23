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
                        return `<li>
                            ${souvenir.person.name} purchased a ${souvenir.thing.name} in ${souvenir.place.name}
                        </li>
                        <form method='POST' action='/${souvenir.id}?_method=DELETE'>
                            <button>Delete</button>
                        </form>`;
                    }).join('')}
                </ul>
            </div>
            <form method='POST'>
            <label for='personId'>Person</label>
            <select name='personId'>
                ${
                    people.map(person => {
                    return `
                        <option value=${person.id}>
                            ${person.name}
                        </option>
                    `;
                    }).join('')
                }
            </select>
            <label for='placeId'>Place</label>
            <select name='placeId'>
                ${
                    places.map(place => {
                    return `
                        <option value=${place.id}>
                            ${place.name}
                        </option>
                    `;
                    }).join('')
                }
            </select>
            <label for='thingId'>Thing</label>
            <select name='thingId'>
                ${
                    things.map(thing => {
                    return `
                        <option value=${thing.id}>
                            ${thing.name}
                        </option>
                    `;
                    }).join('')
                }
            </select>
            <button>Create</button>
            </form>
        </body>
        </html>
    `
};