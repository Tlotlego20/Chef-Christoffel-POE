import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GuestPage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guest Menu</Text>
      <Button title="Starters" onPress={() => navigation.navigate('Starters')} />
      <Button title="Mains" onPress={() => navigation.navigate('Mains')} />
      <Button title="Desserts" onPress={() => navigation.navigate('Desserts')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#eb7a10',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default GuestPage;
