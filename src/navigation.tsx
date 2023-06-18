import React, {FC, useContext} from 'react';
import login from 'src/pages/login';
import Dashboard from 'pages/dashboard';
import WorkTicket from 'pages/workTicket';
import Map from 'src/pages/map';
import AddTicket from 'src/pages/addTiket';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamsList} from 'interfaces/RootStackParams';
import {DefaultUserContext, UserContext} from './context/userContext';
const Stack = createNativeStackNavigator<RootStackParamsList>();

const Navigation: FC = () => {
  const {isLogged} = useContext(UserContext) as DefaultUserContext;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isLogged ? (
          <Stack.Group>
            <Stack.Screen name="Login" component={login} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="WorkTicket" component={WorkTicket} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="AddTicket" component={AddTicket} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
