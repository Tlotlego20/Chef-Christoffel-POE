import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { useMenu } from './MenuContext';

type HomeScreenProps = {
  navigation: NavigationProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { menuItems } = useMenu();

  // Function to calculate the average price per course
  const calculateAveragePricePerCourse = () => {
    // Group prices by course
    const courseGroups = menuItems.reduce((acc, item) => {
      if (!acc[item.course]) acc[item.course] = [];
      acc[item.course].push(item.price);
      return acc;
    }, {} as { [key: string]: number[] });

    // Calculate the average price for each course
    return Object.entries(courseGroups).map(([course, prices]) => ({
      course,
      avgPrice: prices.reduce((sum, price) => sum + price, 0) / prices.length,
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Overview</Text>
      <FlatList
        data={calculateAveragePricePerCourse()}
        renderItem={({ item }) => (
          <Text style={styles.courseText}>
            {item.course.charAt(0).toUpperCase() + item.course.slice(1)}: Average Price R{item.avgPrice.toFixed(2)}
          </Text>
        )}
        keyExtractor={(item) => item.course}
      />
      <Button title="Manage Menu" onPress={() => navigation.navigate('MenuManagement')} />
      <Button title="Guest View" onPress={() => navigation.navigate('GuestPage')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eb7a10',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  courseText: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default HomeScreen;

