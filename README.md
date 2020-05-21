# Pokemon Catching App

## Application Conccept and Wireframe
## Application Conccept
  -This is a pokemon catching app
  -We will be using pokeAPI for poke data
  -Full CRUD
    -Get: get all pokemon
    -Post: Caught pokemon will be posted to our array
    -Put: give pokemon a name
    -Delete: Release pokemon back into the wild

### Functionality
  -We want a header at the top of the page to display the name of our app
  -When the app loads, three images of grass will load
    -When the grass is clicked, we reveal a wild pokemon
  -Once we select a pokemon, we will push that pokemon to our pokedex
  -The pokedex will show the new caught pokemon
  -pokedex will show the name of the pokemon
  -pokedex will have a button to release the pokemon
  -pokedex will update when pokemon is released

### Endpoints
  -get - fetch 3 random pokemon from pokeAPI (retrieve it on front/back)
  -get - fetch our pokedex
  -post - push caught pokemon to pokedex
  -put - change pokemon name
  -delete - delete our pokemon from pokedex

### Component Architecture
- App.js (stateful: hold our wild pokemon information. this.state.caughtPokemon)
  - Header.js (functional)
  - Fonder.js (stateful: axios request to fetch three wild pokemon)
    -Grass.js (stateful: this.state.grassClicked)
  -Pokedex.js (funtional)
    - Pokemon.js (stateful: this.state.name, this.state.editing)

### Wireframe
