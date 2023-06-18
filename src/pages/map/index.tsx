//MAP PAGE
import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from 'src/types/RootStackParams';
import {Text} from 'src/components/staticComponents';
import CustomSafeArea from 'src/components/customSafeArea';
import TopMenuIcon from 'components/topMenuIcon';
import {styled} from 'styled-components/native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps';

const goBackIcon = require('assets/goBack.png');
type PropsMapStack = NativeStackScreenProps<RootStackParamsList, 'Map'>;

const Container = styled.View``;

const TopMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0 5px 0;
`;

const TitleText = styled(Text)`
  width: 64%;
`;

const MapContainer = styled(MapView)`
  width: 100%;
  height: 100%;
  background-color: #000;
`;

const Map: FC<PropsMapStack> = ({navigation, route}) => {
  const {lat, lon} = route.params;
  return (
    <Container>
      <TopMenu>
        <TopMenuIcon
          text={'back'}
          onPress={() => navigation.goBack()}
          src={goBackIcon}
        />
        <TitleText>Get Directions</TitleText>
      </TopMenu>
      <MapContainer
        provider={PROVIDER_GOOGLE}
        mapType="standard"
        initialRegion={{
          latitude: lat,
          longitude: lon,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}>
        <Marker
          coordinate={{
            latitude: lat,
            longitude: lon,
          }}
        />
      </MapContainer>
    </Container>
  );
};

export default CustomSafeArea(Map);
