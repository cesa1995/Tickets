import React, {FC, useContext} from 'react';
import {styled} from 'styled-components/native';
import TopMenuIcon from '../../../../components/topMenuIcon';
import {windowWidth} from 'constanst/dimentions';
import colors from 'constanst/colors';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from 'src/types/RootStackParams';
import {DefaultUserContext, UserContext} from 'src/context/userContext';

const CandelarIcon = require('assets/calendar.png');
const menuIcon = require('assets/menu.png');
const newTicketIcon = require('assets/newTicket.png');
const smallIcon = require('assets/smallLogo.png');
const syncIcon = require('assets/sync.png');

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0 5px 0;
`;

const TitleText = styled.Text`
  color: ${colors.grey};
`;

const TitleBorder = styled.View`
  height: ${windowWidth / 30}px;
  border: 0.5px solid ${colors.grey};
  margin: 0 3px 0 3px;
`;

const View = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.Image`
  width: ${windowWidth / 6}px;
  height: ${windowWidth / 6}px;
  max-width: 150px;
  max-height: 50px;
  object-fit: contain;
`;

const TopMenu: FC = () => {
  const {setIsLogged} = useContext(UserContext) as DefaultUserContext;
  const navigation = useNavigation<NavigationProp>();
  const goToCalendar = () => {
    console.log('go to Calendar');
  };

  const goToSync = () => {
    console.log('go to Sync');
  };

  const goToNewTicket = () => navigation.navigate('AddTicket');

  const goToMenu = () => {
    setIsLogged(false);
  };
  return (
    <Container>
      <TopMenuIcon
        src={CandelarIcon}
        onPress={goToCalendar}
        text={'Calendar'}
      />
      <TopMenuIcon src={syncIcon} onPress={goToSync} text={'Sync'} />
      <View>
        <Logo source={smallIcon} />
        <TitleBorder />
        {windowWidth > 500 && <TitleText>Dashboard</TitleText>}
      </View>
      <TopMenuIcon
        src={newTicketIcon}
        onPress={goToNewTicket}
        text={'New Ticket'}
      />
      <TopMenuIcon src={menuIcon} onPress={goToMenu} text={'Menu'} />
    </Container>
  );
};

export default TopMenu;
