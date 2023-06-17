import React, {FC, useState} from 'react';
import colors from 'constanst/colors';
import styled from 'styled-components/native';

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
};

const CustomInput: FC<input> = ({placeholderText}) => {
  const [focusUserName, setFocusName] = useState(false);

  return (
    <Input
      placeholder={placeholderText}
      onFocus={() => setFocusName(true)}
      onBlur={() => setFocusName(false)}
      isFocus={focusUserName}
    />
  );
};

export default CustomInput;
