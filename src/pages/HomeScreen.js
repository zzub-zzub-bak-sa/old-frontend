import React from 'react';
import { Text } from 'react-native';
import { title1 } from '../styles/fonts';
import Layout from '../components/layout/Layout'

const HomeScreen = () => {
  return (
    <Layout>
      <Text style={{ ...title1.bold }}>Gathered through Links</Text>
    </Layout>
  );
};

export default HomeScreen;