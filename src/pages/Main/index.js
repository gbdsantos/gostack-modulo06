import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Form, Input, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuário"
        />
      </Form>
      <SubmitButton>
        <Icon name="add" size={20} color="#FFF" />
      </SubmitButton>
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Usuários',
}

