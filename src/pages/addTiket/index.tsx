//page that creates and edits a new ticket

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useState} from 'react';
import {ScrollView} from 'react-native';
import CustomButton from 'src/components/customButtom';
import CustomInput from 'src/components/customInput';
import CustomSafeArea from 'src/components/customSafeArea';
import {Text} from 'src/components/staticComponents';
import TopMenuIcon from 'src/components/topMenuIcon';
import {createTable, getDBConnection, savetickets} from 'src/hooks/database';
import {RootStackParamsList} from 'src/types/RootStackParams';
import {ticket, ticketKeys} from 'src/types/tickets';
import {styled} from 'styled-components/native';
const goBackIcon = require('assets/goBack.png');

type PropsAddTicketStack = NativeStackScreenProps<
  RootStackParamsList,
  'AddTicket'
>;

const TopMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0 5px 0;
`;

const TitleText = styled(Text)`
  width: 64%;
`;

const emtyTicket = {
  id: 0,
  name: '',
  address: '',
  dateStamp: 0,
  number: 0,
  userName: '',
  phoneNumbers: 0,
  distance: 0,
  timer: 0,
  dispatchNote: '',
  classDept: '',
  serviceType: '',
  resonForCall: [],
  coordinates: {
    lon: 0,
    lat: 0,
  },
};

const AddTicket: FC<PropsAddTicketStack> = ({navigation, route}) => {
  const ticketParams = route.params;
  const [ticketData, setTicketData] = useState<ticket>(
    ticketParams ?? emtyTicket,
  );

  const SetData = (value: String | number | string, key: ticketKeys) => {
    setTicketData(item => ({...item, [key]: value}));
  };

  const SetLatitude = (value: number) => {
    setTicketData(item => ({
      ...item,
      coordinates: {lat: value, lon: item.coordinates.lon},
    }));
  };

  const SetLongitude = (value: number) => {
    setTicketData(item => ({
      ...item,
      coordinates: {lat: item.coordinates.lat, lon: value},
    }));
  };

  const SetReson = (index: number, value: string) => {
    setTicketData(item => {
      let itemTem: ticket = {...item};
      itemTem.resonForCall[index].text = value;
      return itemTem;
    });
  };

  const AddReson = () => {
    setTicketData(item => {
      let itemTem: ticket = {...item};
      itemTem.resonForCall[itemTem.resonForCall.length] = {
        text: '',
        id: undefined,
      };
      return itemTem;
    });
  };

  const onSave = async () => {
    const db = await getDBConnection();
    await createTable(db);
    await savetickets(db, ticketData, ticketParams?.id);
    navigation.goBack();
  };

  return (
    <ScrollView>
      <TopMenu>
        <TopMenuIcon
          text={'back'}
          onPress={() => navigation.goBack()}
          src={goBackIcon}
        />
        <TitleText>{ticketParams ? 'Edit Ticket' : 'New Ticket'}</TitleText>
      </TopMenu>
      <CustomInput
        setValue={text => SetData(text, 'name')}
        placeholderText="Name"
        value={ticketData.name}
      />
      <CustomInput
        setValue={text => SetData(text, 'address')}
        placeholderText="Address"
        value={ticketData.address}
      />
      <CustomInput
        setValue={text => SetData(text, 'dateStamp')}
        placeholderText="Date"
        value={ticketData.dateStamp}
      />
      <CustomInput
        setValue={text => SetData(text, 'number')}
        placeholderText="Number"
        value={ticketData.number}
      />
      <CustomInput
        setValue={text => SetData(text, 'userName')}
        placeholderText="UserName"
        value={ticketData.userName}
      />
      <CustomInput
        setValue={text => SetData(text, 'phoneNumbers')}
        placeholderText="Phone Number"
        value={ticketData.phoneNumbers}
      />
      <CustomInput
        setValue={text => SetData(text, 'distance')}
        placeholderText="Distance"
        value={ticketData.distance}
      />
      <CustomInput
        setValue={text => SetData(text, 'timer')}
        placeholderText="Timer"
        value={ticketData.timer}
      />
      <CustomInput
        setValue={text => SetData(text, 'dispatchNote')}
        placeholderText="Note"
        value={ticketData.dispatchNote}
      />
      <CustomInput
        setValue={text => SetData(text, 'classDept')}
        placeholderText="Class dept."
        value={ticketData.classDept}
      />
      <CustomInput
        setValue={text => SetData(text, 'serviceType')}
        placeholderText="Service Type"
        value={ticketData.serviceType}
      />
      <CustomInput
        setValue={text => SetLatitude(+text)}
        placeholderText="Latitude"
        type="numeric"
        value={ticketData.coordinates.lat}
      />
      <CustomInput
        setValue={text => SetLongitude(+text)}
        placeholderText="Longitude"
        type="numeric"
        value={ticketData.coordinates.lon}
      />
      {ticketData.resonForCall.map((reson, index) => {
        return (
          <CustomInput
            key={index}
            placeholderText="Reson"
            value={reson.text}
            setValue={text => SetReson(index, text)}
          />
        );
      })}
      <CustomButton text={'Add reson'} onPress={() => AddReson()} />
      <CustomButton text={'Save Ticket'} onPress={() => onSave()} />
    </ScrollView>
  );
};

export default CustomSafeArea(AddTicket);
