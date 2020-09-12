import React, { useCallback, useRef } from 'react';

import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';

import {
  Container,
  Title,
  ForgoutPassword,
  ForgoutPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './style';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

const Signin: React.FC = () => {
  const formRef = useRef(null);
  const navigation = useNavigation();

  const handleSignIn = useCallback(() => {}, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title>Faça seu logon</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input name="email" icon="mail" placeholder="E-mail" />
              <Input name="password" icon="lock" placeholder="Senha" />
              <Button
                onPress={() => {
                  console.log(`Deu`);
                }}
              >
                Entrar
              </Button>
            </Form>
            <ForgoutPassword>
              <ForgoutPasswordText>Esqueci minha senha</ForgoutPasswordText>
            </ForgoutPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton>
        <CreateAccountButtonText onPress={() => navigation.navigate('SignUp')}>
          <Icon name="log-in" size={20} color="#ff9000" />
          Criar uma conta
        </CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default Signin;
