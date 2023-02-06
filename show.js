const getBeers = require('./data')

function main() {
    const beers = getBeers();
    beers.forEach((beer) => {
        console.log(`${beer.name}  (${beer.brewery})` )
    })
}

main()