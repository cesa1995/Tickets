//page showing ticket details
import React, {FC, useMemo} from 'react';
import CustomSafeArea from 'components/customSafeArea';
import {RootStackParamsList} from 'interfaces/RootStackParams';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScrollView} from 'react-native';
import {styled} from 'styled-components/native';
import moment from 'moment';
import colors from 'constanst/colors';
import TopMenuIcon from '../../components/topMenuIcon';
import CustomerInfo from './components/customerInfo';
import TicketInfo from './components/ticketInfo';
import Notes from './components/notes';

const menuIcon = require('assets/menu.png');
const GoBackIcon = require('assets/goBack.png');

type Props = NativeStackScreenProps<RootStackParamsList, 'WorkTicket'>;

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0 5px 0;
`;

const TitleText = styled.Text`
  color: ${colors.grey};
`;

const Space = styled.View`
  height: 10px;
  width: 100%;
  background-color: ${colors.greySecondary};
`;

const WorkTicket: FC<Props> = ({route, navigation}) => {
  const item = route.params;

  const date = useMemo(() => {
    return moment.unix(item.dateStamp).format('llll');
  }, [item]);

  return (
    <ScrollView>
      <Container>
        <TopMenuIcon
          src={GoBackIcon}
          onPress={() => navigation.goBack()}
          text={'Back'}
        />
        <TitleText>Work Ticket</TitleText>
        <TopMenuIcon src={menuIcon} onPress={() => {}} text={'Menu'} />
      </Container>
      <CustomerInfo
        date={date}
        phoneNumbers={item.phoneNumbers}
        userName={item.userName}
      />
      <TicketInfo
        address={item.address}
        classDept={item.classDept}
        dispatchNote={item.dispatchNote}
        distance={item.distance}
        serviceType={item.serviceType}
        timer={item.timer}
        coordinatesProps={item.coordinates}
      />
      <Space />
      <Notes number={item.number} resonForCall={item.resonForCall} />
    </ScrollView>
  );
};

export default CustomSafeArea(WorkTicket);
