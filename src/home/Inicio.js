import React, { Component } from 'react'
import { Container, Card, Segment, Button, Icon } from 'semantic-ui-react'
import Navegacao from './Navegacao'
import { auth, providers } from './../config'
import {Redirect} from 'react-router-dom'



class Inicio extends Component {

    constructor(props) {
        super(props)

        this.state = {
            usuario: {},
            estaLogado: false
        }
        auth.onAuthStateChanged((usuario) => {
            if (usuario) {
                console.log('Usuário logado com sucesso!' + usuario)
                this.setState({
                    usuario,
                    estaLogado: true
                })
              /*  localStorage.setItem('nome', usuario.displayName)
                localStorage.setItem('foto', usuario.photoURL)
                */
            }
            else {
                console.log('Usuário não logou')
                this.setState({ estaLogado: false })
            }
        })
    }

    autentica(provider) {
        console.log(provider)
        //irá abrir um pop para logar e dentre os providers será providers q estou pedindo entre []
        auth.signInWithPopup(providers[provider])

    }

    render() {

        if(this.state.estaLogado){
          
          return <Redirect to='/Categorias'/>
        }

        return (
            <div>
                <Navegacao />
                <Container>
                    <Segment className='centralizar'>
                        <Card.Description><h1>Quiz</h1></Card.Description>
                    </Segment>

                    <p>
                        Desafie os seus amigos neste incrível jogo de perguntas e respotas. Basta acessar com
              </p>
                    {
                        !this.state.estaLogado &&

                        <Card fluid className='centralizar'>
                            <Card.Content>
                                <Card.Description> Acesse agora mesmo</Card.Description>
                            </Card.Content>
                            <Card.Content>
                                <Button color='facebook' onClick={() => this.autentica('facebook')}><Icon name='facebook' />Login com Facebook</Button>
                                <Button color='twitter'><Icon name='twitter' onClick={() => this.autentica('twitter')}/>Login com Twitter</Button>
                                <Button color='yellow'><Icon name='google' />Login com Gmail</Button>
                                <Button color='green'><Icon name='user secret' color='red' />Usuário Administrativo</Button>
                            </Card.Content>
                        </Card>
                    }
                    {
                         this.state.estaLogado &&
                         <div>
                            
                             <h3>{this.state.usuario.displayName}</h3>
                             <img src={this.state.usuario.photoURL} alt="foto"/>
                         </div>
              }
                </Container>
         
            </div>
        )
    }
}
export default Inicio