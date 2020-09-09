import React from 'react';
import { TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Container, TextInput } from './style';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Button: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />
      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        {...rest}
      />
    </Container>
  );
};

export default Button;
