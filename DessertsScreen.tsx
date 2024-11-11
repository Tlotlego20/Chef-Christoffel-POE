import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useMenu } from './MenuContext';

const DessertsScreen: React.FC = () => {
  const { menuItems } = useMenu();
  const desserts = menuItems.filter(item => item.course === 'dessert');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desserts</Text>
      <FlatList
        data={desserts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.name} - R{item.price.toFixed(2)}</Text>
          </View>
        )}
      />
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
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default DessertsScreen;
