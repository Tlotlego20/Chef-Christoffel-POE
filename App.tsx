import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import HomeScreen from './HomeScreen';
import MenuManagementScreen from './MenuManagementScreen';
import GuestPage from './GuestPage';
import StartersScreen from './StartersScreen';
import MainsScreen from './MainsScreen';
import DessertsScreen from './DessertsScreen';
import CheckoutScreen from './CheckoutScreen';
import { MenuProvider } from './MenuContext';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="MenuManagement" component={MenuManagementScreen} />
          <Stack.Screen name="GuestPage" component={GuestPage} />
          <Stack.Screen name="Starters" component={StartersScreen} />
          <Stack.Screen name="Mains" component={MainsScreen} />
          <Stack.Screen name="Desserts" component={DessertsScreen} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
};

export default App;
