import React from 'react';
import {ImageSourcePropType, PixelRatio} from 'react-native';
import {windowWidth} from 'constanst/dimentions';
import {styled} from 'styled-components/native';
import {FC} from 'react';
import colors from 'constanst/colors';

const Icon = styled.Image`
  height: ${windowWidth / 20}px;
  width: ${windowWidth / 20}px;
  max-width: 70px;
  max-height: 70px;
  object-fit: contain;
  margin: 0;
  padding: 0;
`;

const Text = styled.Text`
  color: ${colors.greenColor};
  font-size: ${PixelRatio.getFontScale() * 10}px;
`;

const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin: 0 10px 0 10px;
`;

const TopMenuIcon: FC<{
  src: ImageSourcePropType;
  onPress: () => void;
  text: String;
}> = ({src, onPress, text}) => {
  return (
    <Container onPress={onPress}>
      <Icon source={src} />
      <Text>{text}</Text>
    </Container>
  );
};

export default TopMenuIcon;
