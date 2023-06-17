import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ticket} from './tickets';

export type RootStackParamsList = {
  Login: undefined;
  Dashboard: undefined;
  WorkTicket: ticket;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamsList>;
