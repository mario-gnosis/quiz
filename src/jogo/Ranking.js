import React, { Component } from 'react'
import { Container, List } from 'semantic-ui-react'
import Usuario from './Usuario'
import Navegacao from './Navegacao'

class Ranking extends Component {
    render() {
        return (
            <div>
                <Navegacao />
                <div className='space'>
                    <h2 className='centralizar'>RANCKING</h2>
                    <p className='centralizar'>Quem é o mestre???</p>
                    <Container>
                        <List divided>
                            <Usuario foto='' nome='Mário N. Lima' pontos='100' />
                            <Usuario foto='' nome='Ana Luiza B. P. Lima' pontos='90' />
                            <Usuario foto='' nome='Marronzinho Nego Veio Boca Podi' pontos='200' />
                        </List>
                    </Container>
                </div>
            </div>
        )
    }

}

export default Ranking