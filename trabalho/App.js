import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import ChatList from './components/ChatList';
import BottomNav from './components/BottomNav';
import contatos from './components/dados';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ChatList contatos={contatos} />
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});

export default App;
