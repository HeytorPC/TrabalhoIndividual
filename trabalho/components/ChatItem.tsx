import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChatItem = ({ nome, mensagem, time, avatar }: any) => (
  <TouchableOpacity style={styles.chatContainer}>
    {avatar ? (
      <Image source={{ uri: avatar }} style={styles.avatar} />
    ) : (
      <View style={[styles.avatar, styles.emptyAvatar]}>
        <Ionicons name="person" size={24} color="#fff" />
      </View>
    )}
    <View style={styles.chatContent}>
      <Text style={styles.chatNome}>{nome}</Text>
      <Text style={styles.chatMensagem}>{mensagem}</Text>
    </View>
    <Text style={styles.chatTime}>{time}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#292929',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  emptyAvatar: {
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatContent: {
    flex: 1,
  },
  chatNome: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  chatMensagem: {
    color: '#888',
    fontSize: 14,
  },
  chatTime: {
    color: '#888',
    fontSize: 12,
  },
});

export default ChatItem;
