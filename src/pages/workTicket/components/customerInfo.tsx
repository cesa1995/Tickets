import React, {FC} from 'react';
import {
  ColumnView,
  DataText,
  Icon,
  RowView,
  Segment,
  UserDataTitle,
} from './comsponents';
import {Text} from 'components/staticComponents';
const Ws = require('src/assets/ws.png');

const CustomerInfo: FC<{
  userName: String;
  phoneNumbers: Number;
  date: String;
}> = ({phoneNumbers, userName, date}) => {
  return (
    <Segment>
      <ColumnView>
        <UserDataTitle>Customer Info:</UserDataTitle>
        <RowView margin={false}>
          <DataText>{userName}</DataText>
          <RowView margin={false}>
            <Icon source={Ws} />
            <Text>{`${phoneNumbers}`}</Text>
          </RowView>
        </RowView>
      </ColumnView>
      <ColumnView>
        <UserDataTitle>Scheduled For:</UserDataTitle>
        <DataText>{date}</DataText>
      </ColumnView>
    </Segment>
  );
};

export default CustomerInfo;
