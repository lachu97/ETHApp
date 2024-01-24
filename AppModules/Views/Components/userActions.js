import React, {useCallback} from 'react';
import {FlatList, Pressable, View} from 'react-native';
import {Avatar, MD2Colors, Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {Toast} from 'react-native-toast-notifications';
import {useNavigation} from '@react-navigation/native';

const actions = [
  {id: 'Buy', name: 'Buy', icon: require('../../assets/add.png')},
  {id: 'Swap', name: 'Swap', icon: require('../../assets/sort.png')},
  {id: 'Sent', name: 'Send', icon: require('../../assets/send.png')},
  {id: 'Copy', name: 'Copy', icon: require('../../assets/copy.png')},
];

const UserActions = () => {
  const walletAddress = useSelector(state => state.reducer.walletAddress);
  const navigation = useNavigation();
  const handlePress = useCallback(
    item => {
      if (item === 'Copy') {
        Toast.show('Copied to ClipBoard', {
          type: 'success',
        });
      }
      if (item === 'Sent') {
        navigation.navigate('Sent');
      }
    },
    [navigation],
  );
  const renderItems = useCallback(
    ({item}) => (
      <Pressable style={{margin: 10}} onPress={() => handlePress(item.id)}>
        <Avatar.Image source={item.icon} />
        <Text style={{alignSelf: 'center', marginVertical: 5}}>
          {item.name}
        </Text>
      </Pressable>
    ),
    [handlePress],
  );
  return (
    <View>
      <FlatList
        style={{marginVertical: 1, backgroundColor: MD2Colors.transparent}}
        data={actions}
        renderItem={renderItems}
        horizontal
      />
    </View>
  );
};
export default React.memo(UserActions);
