import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ItemDeChat from './ChatItem';

const ChatList = ({ contatos }: any) => {
  return (
    <FlatList
      data={contatos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ItemDeChat
          nome={item.nome}
          mensagem={item.mensagem}
          horario={item.horario}
          avatar={item.avatar}
        />
      )}
      contentContainerStyle={styles.lista}
    />
  );
};

const styles = StyleSheet.create({
  lista: {
    paddingHorizontal: 10,
  },
});

export default ChatList;
