import React, {FC} from 'react';
import {
  ColumnView,
  DataText,
  Icon,
  RowView,
  Segment,
  UserDataTitle,
} from './comsponents';
import {styled} from 'styled-components/native';
import colors from 'constanst/colors';
import {windowWidth} from 'constanst/dimentions';
import {getFontSize} from 'utils/fonts';
import {Text} from 'components/staticComponents';

const Distance = require('src/assets/distance.png');
const Schedule = require('src/assets/schedule.png');
const Position = require('src/assets/positio.png');

const Border = styled.View`
  width: 100%;
  border: 0.5px solid ${colors.grey};
`;

const ContainerLimit = styled.View`
  width: ${windowWidth > 400 ? '50%' : '100%'};
  height: ${windowWidth > 400 ? '100%' : 'auto'};
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
}> = ({address, classDept, dispatchNote, distance, serviceType, timer}) => {
  return (
    <Segment>
      <ContainerLimit>
        <RowView margin={true}>
          <ColumnView>
            <RowView margin={false}>
              <Icon source={Position} />
              <UserDataTitle>Job Site Address:</UserDataTitle>
            </RowView>
            <Address>{address}</Address>
            <RowView margin={false}>
              <Icon source={Distance} />
              <UserDataTitle>Distance:</UserDataTitle>
            </RowView>
            <DataText>{`Approx. ${timer} Minutes`}</DataText>
            <UserDataTitle>{`${distance} miles`}</UserDataTitle>
          </ColumnView>
          <Button>
            <ButtonText>Get Directions</ButtonText>
          </Button>
        </RowView>
      </ContainerLimit>
      <ContainerLimit>
        <ColumnView>
          <RowView margin={true}>
            <Icon source={Schedule} />
            <UserDataTitle>Dispatch Note:</UserDataTitle>
          </RowView>
          <DispachText>{dispatchNote}</DispachText>
          <Border />
          <RowView margin={true}>
            <RowView margin={false}>
              <UserDataTitle>Dept. Class:</UserDataTitle>
              <DataText>{classDept}</DataText>
            </RowView>
            <RowView margin={false}>
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
