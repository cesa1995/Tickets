import React, {FC} from 'react';
import {ColumnView, Segment, UserDataTitle} from './comsponents';
import {Text} from 'components/staticComponents';
import {styled} from 'styled-components/native';

const TextNumber = styled(Text)`
  align-self: flex-end;
`;

const Notes: FC<{
  resonForCall: String[];
  number: Number;
}> = ({number, resonForCall}) => {
  return (
    <Segment>
      <UserDataTitle>Reason for Call:</UserDataTitle>
      <ColumnView>
        {resonForCall.map((reson, index) => (
          <Text key={`${index}-${Math.random() * index}`}>{reson}</Text>
        ))}
      </ColumnView>
      <TextNumber>{`Ticket #${number}`}</TextNumber>
    </Segment>
  );
};

export default Notes;
