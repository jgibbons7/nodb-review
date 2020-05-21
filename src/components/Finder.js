import React, {Component} from 'react'
import Grass from './Grass'
import axios from 'axios'

class Finder extends Component {
  constructor(){
    super()
    this.state = {
      wildPokemon: []
   
   }
   this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(){
    axios.get('/api/wild-pokemon').then(res => {
      this.setState({
        wildPokemon: res.data
      })
    })
  }

  render(){
    const pokemonMap = this.state.wildPokemon.map((element) => (
    <Grass key={pokemon.Id} catchPokemon={this.props.catchPokemon} data={data} />))
    return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      Finder.js
      <Grass 
      refreshFn ={this.componentDidMount}
      catchPokemon={this.props.catchPokemon} />
    </div>
    )
  }
}
export default Finder