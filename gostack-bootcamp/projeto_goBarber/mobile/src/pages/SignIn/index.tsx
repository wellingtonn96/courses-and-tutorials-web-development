import React from 'react';

import { Image } from 'react-native';
import { Container, Title } from './style';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

const Signin: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />

      <Title>Faça seu logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />
      <Button>Entrar</Button>
    </Container>
  );
};

export default Signin;
