import React, {FC} from 'react';
import CustomSafeArea from 'components/customSafeArea';
import styled from 'styled-components/native';
import CustomInput from 'components/customInput';
import CustomButton from 'components/customButtom';
import colors from 'constanst/colors';
import {Text} from 'components/staticComponents';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from 'interfaces/RootStackParams';

const Logo = require('assets/logo.png');

const Background = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${colors.White};
`;

const Container = styled.View`
  height: 100%;
  width: 90%;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  width: 200px;
  height: 100px;
  object-fit: contain;
`;

const ForgotButtom = styled.TouchableOpacity`
  margin-top: 10px;
  align-self: flex-end;
`;

const Login: FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const onLoginHandle = () => {
    console.log('Login!');
    navigation.navigate('Dashboard');
  };
  return (
    <Background>
      <Container>
        <Image source={Logo} />
        <CustomInput placeholderText={'UserName'} />
        <CustomInput placeholderText={'Password'} />
        <CustomButton text={'Login'} onPress={onLoginHandle} />
        <ForgotButtom>
          <Text>Forgot?</Text>
        </ForgotButtom>
      </Container>
    </Background>
  );
};

export default CustomSafeArea(Login);
