import React, {FC} from 'react';
import CustomSafeArea from 'components/customSafeArea';
import {styled} from 'styled-components/native';
import TopMenu from './components/TopMenu';
import colors from 'constanst/colors';
import moment from 'moment';
import {FlatList} from 'react-native';
import tickets from 'dommy/tickets';
import Ticket from 'components/ticket';

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

const Dashboard: FC = () => {
  return (
    <Container>
      <TopMenu />
      <DateContainer>
        <TextDate>{moment().format('MMM DD, YYYY')}</TextDate>
      </DateContainer>
      <FlatList
        data={tickets}
        renderItem={({item}) => <Ticket item={item} />}
      />
    </Container>
  );
};

export default CustomSafeArea(Dashboard);
