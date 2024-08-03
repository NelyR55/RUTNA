
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from '../screens/App';
import Admin from '../screens/Admin';
import GestionBoletos from '../screens/GestionBoletos';
import PerfilAdmin from '../screens/PerfilAdmin';



export type RootStackParamList = {
  Login: undefined;
  Admin: undefined;
  GestionBoletos: undefined;
  PerfilAdmin: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={App} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="GestionBoletos" component={GestionBoletos} />
        <Stack.Screen name="PerfilAdmin" component={PerfilAdmin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
