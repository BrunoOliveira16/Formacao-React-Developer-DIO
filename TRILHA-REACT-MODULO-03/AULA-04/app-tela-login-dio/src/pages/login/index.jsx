//import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
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

const schema = yup.object({
  email: yup.string().email('e-mail inválido ex: usuario@mail.com').required('Campo Obrigatório'),
  password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo Obrigatório'),
}).required();

const Login = () => {
  //const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  console.log(isValid, errors)

  const onSubmit = data => console.log(data);

  /*const handleClickSignIn = () => {
    navigate('/feed')
  }*/

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="email" control={control} errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail />} />
                <Input name="password"  control={control} errorMessage={errors?.password?.message} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                <Button title="Entrar" variant="secondary" type="submit" />
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