import React, {FC} from 'react';
import {
  ColumnView,
  DataText,
  Icon,
  RowView,
  Segment,
  UserDataTitle,
  padding,
} from './comsponents';
import {styled} from 'styled-components/native';
import colors from 'constanst/colors';
import {windowWidth} from 'constanst/dimentions';
import {getFontSize} from 'utils/fonts';
import {Text} from 'components/staticComponents';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from 'src/types/RootStackParams';
import {coordinates} from 'src/types/tickets';

const Distance = require('assets/distance.png');
const Schedule = require('assets/schedule.png');
const Position = require('assets/positio.png');

const Border = styled.View`
  width: 100%;
  border: 0.5px solid ${colors.grey};
`;

const ContainerLimit = styled.View`
  width: ${windowWidth > 450 ? '50%' : '100%'};
  height: ${windowWidth > 450 ? '100%' : 'auto'};
  border: 0.3px solid #000;
`;

const Button = styled.TouchableOpacity`
  background-color: ${colors.greenColor};
  margin: 0;
  padding: 0 5px 0 5px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 25px;
`;

const ButtonText = styled.Text`
  color: #fff;
  padding: 0;
  margin: 0;
  font-size: ${getFontSize(12)}px;
`;

const Address = styled(DataText)`
  max-width: 70%;
`;

const DispachText = styled(Text)`
  margin: 10px;
`;

const TicketInfo: FC<{
  address: String;
  timer: Number;
  distance: Number;
  dispatchNote: String;
  classDept: String;
  serviceType: String;
  coordinatesProps: coordinates;
}> = ({
  address,
  classDept,
  dispatchNote,
  distance,
  serviceType,
  timer,
  coordinatesProps,
}) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Segment>
      <ContainerLimit>
        <RowView customPadding={padding}>
          <ColumnView>
            <RowView>
              <Icon source={Position} />
              <UserDataTitle>Job Site Address:</UserDataTitle>
            </RowView>
            <Address>{address}</Address>
            <RowView>
              <Icon source={Distance} />
              <UserDataTitle>Distance:</UserDataTitle>
            </RowView>
            <DataText>{`Approx. ${timer} Minutes`}</DataText>
            <UserDataTitle>{`${distance} miles`}</UserDataTitle>
          </ColumnView>
          <Button onPress={() => navigation.navigate('Map', coordinatesProps)}>
            <ButtonText>Get Directions</ButtonText>
          </Button>
        </RowView>
      </ContainerLimit>
      <ContainerLimit>
        <ColumnView>
          <RowView customPadding={padding}>
            <Icon source={Schedule} />
            <UserDataTitle>Dispatch Note:</UserDataTitle>
          </RowView>
          <DispachText>{dispatchNote}</DispachText>
          <Border />
          <RowView customPadding={padding}>
            <RowView>
              <UserDataTitle>Dept. Class:</UserDataTitle>
              <DataText>{classDept}</DataText>
            </RowView>
            <RowView>
              <UserDataTitle>Service Type:</UserDataTitle>
              <DataText>{serviceType}</DataText>
            </RowView>
          </RowView>
        </ColumnView>
      </ContainerLimit>
    </Segment>
  );
};

export default TicketInfo;
