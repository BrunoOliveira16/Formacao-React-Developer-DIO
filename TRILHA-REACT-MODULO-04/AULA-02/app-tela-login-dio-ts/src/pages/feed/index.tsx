import { Container, Column, Title, TitleHighLight } from './styles';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

const Feed = () => {

  return (<>
        <Header />
        <Container>
          <Column flex={3}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Column>
          <Column flex={1}>
            <TitleHighLight># RANKING TOP 5 DA SEMANA</TitleHighLight>
            <UserInfo percentual={35} nome={"Bruno Oliveira"} image="https://avatars.githubusercontent.com/u/103857382?v=4"/>
            <UserInfo percentual={35} nome={"Bruno Oliveira"} image="https://avatars.githubusercontent.com/u/103857382?v=4"/>
            <UserInfo percentual={35} nome={"Bruno Oliveira"} image="https://avatars.githubusercontent.com/u/103857382?v=4"/>
            <UserInfo percentual={35} nome={"Bruno Oliveira"} image="https://avatars.githubusercontent.com/u/103857382?v=4"/>
            <UserInfo percentual={35} nome={"Bruno Oliveira"} image="https://avatars.githubusercontent.com/u/103857382?v=4"/>
          </Column>
        </Container>
  </>);
};

export { Feed };