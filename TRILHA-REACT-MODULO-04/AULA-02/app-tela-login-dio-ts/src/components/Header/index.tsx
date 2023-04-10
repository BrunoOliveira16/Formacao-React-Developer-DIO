import { Button } from '../Button';
import { GoSearch } from 'react-icons/go';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { 
    Container, 
    Row, 
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    MenuHighLight,
    UserPicture,
    Input,
    IconContainer,
    Logout
} from './styles';
import logo from '../../assets/logo.svg';


const Header = () => {

    const { user, handleSignOut } = useAuth();

    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/')
    }
    const handleClickSignIn = () => {
        navigate('/login')
    }
    const handleClickRegister = () => {
        navigate('/register')
    }

  return (
    <Wrapper>
        <Container>
            <Row>
                <Link to="/">
                    <img src={ logo } alt="Logo da DIO" />
                </Link>
                {user.id ? (
                    <>
                        <BuscarInputContainer>
                        <IconContainer>
                            <GoSearch />
                        </IconContainer>
                        <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                        <Menu>Vagas</Menu>
                        <Menu>Artigos</Menu>
                        <Menu>Rooms</Menu>
                        <MenuHighLight>Seja Global</MenuHighLight>
                    </>
                ) : null }
                
            </Row>
            <Row>
                {user.id ? (
                    <>
                        <UserPicture src="https://avatars.githubusercontent.com/u/103857382?v=4" />{" "}
                        <Logout onClick={handleSignOut}>Sair</Logout>
                    </>
                ) : (
                    <>
                        <MenuRight onClick={handleClickHome}>Home</MenuRight>
                        <Button title="Entrar" onClick={handleClickSignIn}/>
                        <Button title="cadastrar" onClick={handleClickRegister}/>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }