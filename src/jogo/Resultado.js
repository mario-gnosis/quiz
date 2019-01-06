import React, { Component } from 'react'
import { List, Container } from 'semantic-ui-react'
import Respostas from './Respostas'
import Navegacao from './Navegacao';

const resposta ={
    id: 1,
    titulo: 'Primeira pergunta',
    alternativa: 3
}

class Resultado extends Component {
  
    render() {
        return (
            <div>
                <Navegacao />
                <div className='space'>
                <h2 className='centralizar'>Seus resultados</h2>
                <p className='centralizar'>Configura seu desempenho nessa categoria</p>
            
            <Container>
                <List divided>
                <Respostas resposta={resposta}/>
                </List>
              </Container>  
            </div>
            </div>
        )
    }
}

export default Resultado