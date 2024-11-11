import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useMenu } from './MenuContext';

const MainsScreen: React.FC = () => {
  const { menuItems } = useMenu();
  const mains = menuItems.filter(item => item.course === 'main');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mains</Text>
      <FlatList
        data={mains}
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

export default MainsScreen;
