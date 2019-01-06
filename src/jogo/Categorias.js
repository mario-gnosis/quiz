import React, { Component } from 'react'
import { Grid} from 'semantic-ui-react'
import Category from './Category';
import Navegacao from './Navegacao';
import config from './../config'

export class Categorias extends Component {

  constructor(props) {
    super(props)

    this.state = {
      categorias: {}
    }
    config.syncState('categorias', {
      context: this,
      state: 'categorias',
      asArray: false
    })
  }

  //   <p>{JSON.stringify(this.state.categorias)}</p>  

  render() {
    return (
      <div >
        <Navegacao />
        <div className='space'>
          <h2 className='centralizar'>Lista de Categorias</h2>
          <p className='centralizar'>Seleciona a categorias que você quer responder perguntas</p>
            
            <Grid columns={5} >
            {
              Object.keys(this.state.categorias)
              .map(key => {
                  return<Category key={key} titulo={this.state.categorias[key].nome} icone={this.state.categorias[key].icone} />
              })
            }
              
            </Grid>      
        </div>
      </div>
    )
  }
}

export default Categorias
