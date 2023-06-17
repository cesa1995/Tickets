import React, {FC} from 'react';
import styled from 'styled-components/native';
import colors from 'constanst/colors';

const Button = styled.TouchableOpacity`
  background: ${colors.greenColor};
  width: 100%;
  height: 50px;
  padding: 0 20px 0 20px;
  border-radius: 5px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: ${colors.White};
  font-weight: bold;
`;

type CustomButtonProps = {
  text: String;
  onPress: () => void;
};

const CustomButton: FC<CustomButtonProps> = ({text, onPress}) => {
  return (
    <Button onPress={onPress}>
      <Text>{text}</Text>
    </Button>
  );
};

export default CustomButton;
