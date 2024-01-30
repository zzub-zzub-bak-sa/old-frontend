import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { title1 } from '../styles/fonts';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ ...title1.bold }}>Gathered through Links</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
