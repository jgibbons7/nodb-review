import React, {Component} from 'react'

class Grass extends Component {
  constructor(){
    super()
    this.state = {
      grassClicked: false,
    }
  }

  checkGrass() {
    const {data} = this.props
    this.props.catchPokemon(data.name, data.sprites.front_default)
    refreshFn(this.props)
  }

  render(){
    return (
    <div>
      <img 
      src={this.props.data.sprites.front_default}
      alt={this.props.data.name}
      onClick={() => this.checkGrass()}
      />
      <p>{this.props.data.name}</p>
    </div>
    )
  }
}


export default Grass