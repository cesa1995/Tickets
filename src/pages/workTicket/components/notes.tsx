import React, {FC} from 'react';
import {ColumnView, Segment, UserDataTitle} from './comsponents';
import {Text} from 'components/staticComponents';
import {styled} from 'styled-components/native';
import {reson} from 'src/types/tickets';

const TextNumber = styled(Text)`
  align-self: flex-end;
`;

const Notes: FC<{
  resonForCall: reson[];
  number: Number;
}> = ({number, resonForCall}) => {
  return (
    <Segment>
      <UserDataTitle>Reason for Call:</UserDataTitle>
      <ColumnView>
        {resonForCall.map((resonItem, index) => (
          <Text key={`${index}-${Math.random() * index}`}>
            {resonItem.text}
          </Text>
        ))}
      </ColumnView>
      <TextNumber>{`Ticket #${number}`}</TextNumber>
    </Segment>
  );
};

export default Notes;
