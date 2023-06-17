import React, {FC, useMemo} from 'react';
import {styled} from 'styled-components/native';
import {ticket} from 'interfaces/tickets';
import moment from 'moment';
import {Text} from './staticComponents';
import colors from 'constanst/colors';
import {windowHeight} from 'constanst/dimentions';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from 'interfaces/RootStackParams';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  margin: 10px 5px 10px 5px;
`;

const Segment = styled.View<{width: String}>`
  justify-content: center;
  width: ${({width}) => `${width}`};
`;

const Title = styled.Text`
  font-size: 16px;
`;

const Buttom = styled.TouchableOpacity`
  background-color: ${colors.greenColor};
  padding: 8px 10px 8px 10px;
  justify-content: center;
  align-items: center;
  max-width: 100px;
`;

const TextButtom = styled(Text)`
  color: #fff;
`;

const SegmentLine = styled.View`
  border: 0.5px solid ${colors.greySecondary};
  margin: 3px 0 3px 0;
`;

const Ticket: FC<{item: ticket}> = ({item}) => {
  const timeStamp = useMemo(() => {
    return {
      time: moment.unix(item.dateStamp).format('hh:mm a'),
      date: moment.unix(item.dateStamp).format('MM/DD/YYYY'),
    };
  }, [item.dateStamp]);

  const navigation = useNavigation<NavigationProp>();

  return (
    <Container>
      <Segment width="100px">
        <Title>{timeStamp.time}</Title>
        <Text>{timeStamp.date}</Text>
        <Text>{`Ticket #${item.number}`}</Text>
      </Segment>
      <SegmentLine />
      <Segment width={windowHeight < 400 ? '60%' : '40%'}>
        <Title>{item.name}</Title>
        <Text>{item.address}</Text>
      </Segment>
      <Segment width={'100px'}>
        <Buttom onPress={() => navigation.navigate('WorkTicket', item)}>
          <TextButtom>View Ticket</TextButtom>
        </Buttom>
      </Segment>
    </Container>
  );
};

export default Ticket;
