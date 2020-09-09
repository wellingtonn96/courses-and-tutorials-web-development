import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, TextInput } from './style';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Button: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <Container>
      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        {...rest}
      />
    </Container>
  );
};

export default Button;
