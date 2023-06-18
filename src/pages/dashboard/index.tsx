//list of created tickets

import React, {FC, useEffect, useState} from 'react';
import CustomSafeArea from 'components/customSafeArea';
import {styled} from 'styled-components/native';
import TopMenu from './components/TopMenu';
import colors from 'constanst/colors';
import moment from 'moment';
import Ticket from 'src/pages/dashboard/components/ticket';
import {ticket} from 'src/types/tickets';
import {
  createTable,
  deleteticket,
  getDBConnection,
  gettickets,
} from 'src/hooks/database';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Text} from 'src/components/staticComponents';
import {RootStackParamsList} from 'src/types/RootStackParams';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const Container = styled.View`
  height: 100%;
`;

const DateContainer = styled.View`
  width: 100%;
  background-color: ${colors.greySecondary};
`;

const TextDate = styled.Text`
  color: ${colors.grey};
  margin-left: 20px;
`;

const HideComponentContainer = styled.View`
  align-items: center;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  padding-left: 5px;
`;

const DeleteButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 30px;
  margin-right: 10px;
  background-color: red;
`;

const EditButtom = styled(DeleteButton)`
  background-color: #d9d944;
`;

const ButtonText = styled(Text)`
  color: #fff;
`;

type PropsDashboardStack = NativeStackScreenProps<
  RootStackParamsList,
  'Dashboard'
>;

const Dashboard: FC<PropsDashboardStack> = ({navigation}) => {
  const [tickets, setTickets] = useState<ticket[]>();

  const getTickets = async () => {
    const db = await getDBConnection();
    await createTable(db);
    const result = await gettickets(db);
    setTickets(result);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getTickets();
    });

    return unsubscribe;
  }, [navigation]);

  const renderHiddenItem = ({item}: {item: ticket}) => (
    <HideComponentContainer>
      <DeleteButton
        onPress={async () => {
          const db = await getDBConnection();
          await deleteticket(db, item.id);
          await getTickets();
        }}>
        <ButtonText>Delete</ButtonText>
      </DeleteButton>
      <EditButtom
        onPress={async () => {
          navigation.navigate('AddTicket', item);
        }}>
        <ButtonText>Edit</ButtonText>
      </EditButtom>
    </HideComponentContainer>
  );

  return (
    <Container>
      <TopMenu />
      <DateContainer>
        <TextDate>{moment().format('MMM DD, YYYY')}</TextDate>
      </DateContainer>
      <SwipeListView
        data={tickets}
        renderItem={({item}) => <Ticket item={item} />}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
      />
    </Container>
  );
};

export default CustomSafeArea(Dashboard);
