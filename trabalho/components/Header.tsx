import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.header}>
      <TextInput
        style={styles.searchBar}
        placeholder="Pesquisar..."
        placeholderTextColor="#888"
      />
      <TouchableOpacity>
        <Ionicons name="camera-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#111111',
    marginTop: 40,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: '#292929',
    borderRadius: 20,
    paddingHorizontal: 15,
    color: '#fff',
    marginRight: 10,
  },
});

export default Header;
