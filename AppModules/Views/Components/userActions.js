import React, {useCallback} from 'react';
import {FlatList, Pressable, View} from 'react-native';
import {Avatar, Text} from 'react-native-paper';
import { useSelector } from "react-redux";
import Clipboard from '@react-native-clipboard/clipboard';
import { Toast } from "react-native-toast-notifications";

const actions = [
  {id: 'Buy', name: 'Buy', icon: require('../../assets/add.png')},
  {id: 'Swap', name: 'Swap', icon: require('../../assets/sort.png')},
  {id: 'Sent', name: 'Send', icon: require('../../assets/send.png')},
  {id: 'Copy', name: 'Copy', icon: require('../../assets/copy.png')},
];

const UserActions = () => {
  const walletAddress = useSelector(state => state.reducer.walletAddress)
  const handlePress = item => {
    if(item.id === 'Copy') {
      Clipboard.setString(walletAddress)
      Toast.show("Copied to ClipBoard",{
        type:'success'
      })
      return
    }
  }
  const renderItems = useCallback(
    ({item}) => (
      <Pressable style={{margin: 10}} onPress={() => handlePress(item.id)}>
        <Avatar.Image source={item.icon} />
        <Text style={{alignSelf: 'center', marginVertical: 5}}>
          {item.name}
        </Text>
      </Pressable>
    ),
    [],
  );
  return (
    <FlatList
      style={{margin: 10}}
      contentContainerStyle={{}}
      data={actions}
      renderItem={renderItems}
      horizontal
    />
  );
};
export default React.memo(UserActions);
