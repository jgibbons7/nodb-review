const express = require('express')
const app = express()
const caughtCtrl = require('./controller/caughtPokemonController')
const wildCtrl = require('./controller/wildPokemonController')
const SERVER_PORT = 4232

app.use(express.json())

app.get('/api/wild-pokemon', caughtCtrl.getThreeRandomPokemon)
app.get('/api/pokemon', caughtCtrl.catchPokemon)
app.put('/api/pokemon/:pokemon_id', caughtCtrl.editPokemonName)
app.delete('/api/pokemon/:pokemon_id', caughtCtrl.deletePokemon)


app.listen(SERVER_PORT, () => console.log(`catching em all on port ${SERVER_PORT}`))

