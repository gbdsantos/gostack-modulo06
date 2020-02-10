import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import { View } from 'react-native';
import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Form, Input, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
  };

  handleAddUser = async () => {
    const { users, newUser } = this.state;

    const response = await api.get(`/users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: reponse.data.avatar_url,
    }

    this.setState({
      users: [...users, data],
      newUser: '',
    });
  }

  render() {
    const { users, newUser } = this.state;

    return (
      < Container >
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
            returnKeyTYpe="send"
            onSubmitEditing={this.handleAddUser}
          />
        </Form>
        <SubmitButton onPress={this.handleAddUser}>
          <Icon name="add" size={20} color="#FFF" />
        </SubmitButton>
      </Container >
    );
  }
};


Main.navigationOptions = {
  title: 'Usuários',
}

