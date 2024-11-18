import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BottomNav = () => (
  <View style={styles.bottomNav}>
    <Ionicons name="chatbubble-ellipses-outline" size={24} color="#fff" />
    <Ionicons name="people-outline" size={24} color="#fff" />
    <Ionicons name="call-outline" size={24} color="#fff" />
  </View>
);

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#1F1F1F',
  },
});

export default BottomNav;
