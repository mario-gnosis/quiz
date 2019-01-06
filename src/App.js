import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom'
import Inicio from './home/Inicio';
import Categorias from './jogo/Categorias';
import Perguntas from './jogo/Perguntas';
import Resultado from './jogo/Resultado';
import Ranking from './jogo/Ranking';
import {Responsive } from 'semantic-ui-react'
import Rodape from './home/Rodape';




class App extends Component {
  render() {
    return (
      <Responsive>
      <BrowserRouter>
        <div className="App">        
          <Route path='/' exact component={Inicio} />
          <Route path='/Categorias' component={Categorias} />
          <Route path='/Perguntas' component={Perguntas} />
          <Route path='/Resultado' component={Resultado} />
          <Route path='/Ranking' component={Ranking} />
        </div>
      </BrowserRouter>
      <Rodape/>
      </Responsive>
    );
  }
}

export default App;
