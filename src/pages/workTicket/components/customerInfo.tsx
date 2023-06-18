import React, {FC} from 'react';
import {
  ColumnView,
  DataText,
  Icon,
  RowView,
  Segment,
  UserDataTitle,
  padding,
} from './comsponents';
import {Text} from 'components/staticComponents';
const Ws = require('assets/ws.png');

const CustomerInfo: FC<{
  userName: String;
  phoneNumbers: Number;
  date: String;
}> = ({phoneNumbers, userName, date}) => {
  return (
    <Segment>
      <ColumnView>
        <UserDataTitle>Customer Info:</UserDataTitle>
        <RowView customPadding={padding}>
          <DataText>{userName}</DataText>
          <RowView>
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
