import React from 'react';
import { Button } from '../Button';
import logo from '../../assets/logo.svg';
import { 
    Container, 
    Row, 
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    Input
} from './styles';

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={ logo } alt="Logo da DIO" />
                <BuscarInputContainer>
                    <Input placeholder='Buscar...' />
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href="$">Home</MenuRight>
                <Button title="Entrar"/>
                <Button title="Cadastrar"/>
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }