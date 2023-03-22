import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Container, TextContent, Title, TitleHighLight } from './styles';
import Banner from '../../assets/professional-challenges.png'
import { Button } from '../../components/Button';

const Home = () => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login')
  }

  return (<>
        <Header />
        <Container>
          <div>
              <Title>
                <TitleHighLight>
                    Implemente
                    <br />                    
                </TitleHighLight>
                o seu futuro global agora!
              </Title>
              <TextContent>
                Domine as tecnologias mais utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
              </TextContent>
              <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
          </div>
          <div>
            <img src={Banner} alt='Imagem principal' />
          </div>
        </Container>
  </>);
};

export { Home };