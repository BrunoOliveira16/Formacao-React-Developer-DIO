import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock } from 'react-icons/md';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input'; 

import { 
  Container, 
  Wrapper, 
  Row, 
  Column, 
  Title, 
  TitleLogin, 
  SubtitleLogin, 
  EsqueciText, 
  CriarText 
} from './styles';

const Login = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/feed')
  }

  return (<>
        <Header />
        <Container>
          <Column>
              <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
              </Title>
          </Column>
          <Column>
            <Wrapper>
              <TitleLogin>Faça seu Cadastro</TitleLogin>
              <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
              <form>
                <Input placeholder="E-mail" leftIcon={<MdEmail />} />
                <Input placeholder="Senha" type="password" leftIcon={<MdLock />} />
                <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="button" />
              </form>
              <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <CriarText>Criar senha</CriarText>
              </Row>
            </Wrapper>
          </Column>
        </Container>
  </>);
};

export { Login };