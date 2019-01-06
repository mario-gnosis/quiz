import React from 'react'
import { Menu, Dropdown, Image, Icon } from 'semantic-ui-react'

const Navegacao = props => {
    return (
        <div className='App-header'>
            <header>
                <h1 >Jogo de Perguntas e Respostas</h1>
                <div className='space'>
                    <Menu>
                        <Menu.Item><Image avatar src='https://cdn2.iconfinder.com/data/icons/creative-head/100/Head__5-512.png'/></Menu.Item>
                        <Menu.Menu position='right'>
                            <Dropdown item text='Acesse aqui'>
                                <Dropdown.Menu>
                                    <Dropdown.Item><Icon name='facebook' color="blue" />Facebook</Dropdown.Item>
                                    <Dropdown.Item><Icon name='twitter' color= 'teal' />Twitter</Dropdown.Item>
                                    <Dropdown.Item><Icon name='google' color='yellow' />Gmail</Dropdown.Item>
                                    <Dropdown.Item><Icon name='user secret' color='red' />Usuário Administrativo</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Menu>
                    </Menu>
                </div>
            </header>
        </div>
    )
}

export default Navegacao