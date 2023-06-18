import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import colors from 'constanst/colors';
import styled from 'styled-components/native';
import {KeyboardTypeOptions} from 'react-native';

const Input = styled.TextInput<{isFocus: Boolean}>`
  border-color: ${({isFocus}) => (isFocus ? colors.greenColor : colors.grey)};
  border-width: 0.5px;
  width: 100%;
  height: 50px;
  padding: 0 20px 0 20px;
  border-radius: 5px;
  margin-top: 20px;
`;
type input = {
  placeholderText: string;
  setValue: (text: string) => void | Dispatch<SetStateAction<String>>;
  type?: KeyboardTypeOptions;
  value: string | String | number;
};

const CustomInput: FC<input> = ({placeholderText, setValue, type, value}) => {
  const [focusUserName, setFocusName] = useState(false);

  return (
    <Input
      keyboardType={type}
      placeholder={placeholderText}
      onFocus={() => setFocusName(true)}
      onBlur={() => setFocusName(false)}
      isFocus={focusUserName}
      onChangeText={event => setValue(event)}
      value={`${value ?? ''}`}
    />
  );
};

export default CustomInput;
