import { FiThumbsUp } from 'react-icons/fi';

import { 
    CardContainer, 
    Content, 
    UserInfo, 
    UserPicture, 
    HasInfo, 
    ImageBackground, 
    PostInfo 
} from './styles'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://i.pinimg.com/564x/24/5e/5d/245e5dde1e06c4b4ccf52743435aca55.jpg" />
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/103857382?v=4" />
                <div>
                    <h4>Bruno Oliveira</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto React e React Native</h4>
                <p>Projeto feito no curso react developer do bootcamp da DIO...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#React #ReactNative #Styled-components</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }