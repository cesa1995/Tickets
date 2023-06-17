import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamsList} from 'interfaces/RootStackParams';
import login from 'pages/login';
import Dashboard from 'pages/dashboard';
import WorkTicket from 'pages/workTicket';

const Stack = createNativeStackNavigator<RootStackParamsList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="WorkTicket" component={WorkTicket} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
