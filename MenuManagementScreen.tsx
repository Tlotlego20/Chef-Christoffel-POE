import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useMenu } from './MenuContext';

const MenuManagementScreen: React.FC = () => {
  const { menuItems, addMenuItem, removeMenuItem } = useMenu();
  const [dishName, setDishName] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const handleAddMenuItem = () => {
    if (!dishName || !course || isNaN(Number(price)) || Number(price) <= 0) {
      Alert.alert('Invalid Input', 'Please fill in all fields correctly');
      return;
    }

    const newDish = { id: Date.now().toString(), name: dishName, course, price: Number(price) };
    addMenuItem(newDish);

    setDishName('');
    setCourse('');
    setPrice('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Menu</Text>
      <TextInput 
        placeholder="Dish Name" 
        value={dishName} 
        onChangeText={setDishName} 
        style={styles.input} 
      />
      <Picker
        selectedValue={course}
        onValueChange={(itemValue) => setCourse(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Course" value="" />
        <Picker.Item label="Mains" value="main" />
        <Picker.Item label="Starters" value="starter" />
        <Picker.Item label="Desserts" value="dessert" />
      </Picker>
      <TextInput 
        placeholder="Price" 
        value={price} 
        onChangeText={setPrice} 
        style={styles.input} 
        keyboardType="numeric" 
      />
      <Button title="Add Menu Item" onPress={handleAddMenuItem} />
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.name} ({item.course}) - R{item.price.toFixed(2)}</Text>
            <Button title="Remove" onPress={() => removeMenuItem(item.id)} />
          </View>
        )}
        keyExtractor={(item) => item.id}
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
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  picker: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default MenuManagementScreen;
