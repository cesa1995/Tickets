//login page

import React, {FC, useContext, useState} from 'react';
import CustomSafeArea from 'components/customSafeArea';
import styled from 'styled-components/native';
import CustomInput from 'components/customInput';
import CustomButton from 'components/customButtom';
import colors from 'constanst/colors';
import {Text} from 'components/staticComponents';
import {DefaultUserContext, UserContext} from 'src/context/userContext';
import {
  createTable,
  getDBConnection,
  getLenTable,
  savetickets,
  ticketsDataTable,
} from 'src/hooks/database';
import tickets from 'src/dommyData/tickets';

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
  const {setIsLogged} = useContext(UserContext) as DefaultUserContext;

  const [userName, setUserName] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const [error, setError] = useState<String>('');
  const onLoginHandle = async () => {
    if (userName !== 'Admin' && password !== 'Admin') {
      setError('incorrect password or Username!');
      return;
    }
    const db = await getDBConnection();
    await createTable(db);
    const len = await getLenTable(db, ticketsDataTable);
    if (+len > 0) {
      setIsLogged(true);
      return;
    }
    const promisess = tickets.map(
      async ticket => await savetickets(db, ticket),
    );
    Promise.all(promisess).finally(() => setIsLogged(true));
  };

  return (
    <Background>
      <Container>
        <Image source={Logo} />
        <CustomInput
          placeholderText={'UserName'}
          setValue={setUserName}
          value={userName}
        />
        <CustomInput
          placeholderText={'Password'}
          setValue={setPassword}
          value={password}
        />
        <Text>{error}</Text>
        <CustomButton text={'Login'} onPress={onLoginHandle} />
        <ForgotButtom>
          <Text>Forgot?</Text>
        </ForgotButtom>
      </Container>
    </Background>
  );
};

export default CustomSafeArea(Login);
