import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {coordinates, ticket} from './tickets';

export type RootStackParamsList = {
  Login: undefined;
  Dashboard: undefined;
  WorkTicket: ticket;
  Map: coordinates;
  AddTicket?: ticket;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamsList>;
