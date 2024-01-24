import React, {useCallback, useState} from 'react';
import {FlatList, View} from 'react-native';
import {Text, Modal, Button, TextInput, Icon} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import sentStyles from './styles/sentStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import TokenCard from './Components/TokenCard';
import {displayNotification} from '../Notification/Notification';

const SentScreen = () => {
  const tokens = useSelector(state => state.reducer.availableTokens);
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [selected, setSelected] = useState('');
  const showModal = useCallback(() => setVisible(true), []);
  const hideModal = useCallback(() => setVisible(false), []);
  const handleSend = useCallback(() => {
    // Here, you can handle the logic to send the specified amount to the Ethereum address
    displayNotification({
      title: `${selected.name} is sent SuccessFully}`,
      body: `Amount of ${amount} has been sent to address ${toAddress}`,
    });
    hideModal();
  }, [amount, hideModal, selected.name, toAddress]);

  const containerStyle = {backgroundColor: 'white', padding: 20};
  const renderTokens = useCallback(
    ({item}) => (
      <TokenCard
        title={item.name}
        amount={item.amount}
        icon={item.icon}
        onPress={() => {
          showModal();
          setSelected(item);
        }}
      />
    ),
    [showModal],
  );
  return (
    <View style={sentStyles.container}>
      <FlatList
        data={tokens}
        renderItem={renderTokens}
        ListHeaderComponent={() => <Text style={{margin: 10}}>Sent</Text>}
      />
      <Modal
        visible={visible}
        style={sentStyles.modal}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <View>
          <Text>Sent to: {selected.name}</Text>
          <Text>Ethereum Address</Text>
          <TextInput
            style={sentStyles.input}
            mode={'outlined'}
            placeholder="Enter Ethereum Address"
            value={toAddress}
            onChangeText={text => setToAddress(text)}
            right={() => <Icon size={24} source={selected.icon} />}
          />
          <Text>Amount</Text>
          <TextInput
            style={sentStyles.input}
            placeholder="Enter Amount"
            value={amount}
            mode={'outlined'}
            onChangeText={text => setAmount(text)}
          />
          <Button style={{marginTop: 10}} onPress={handleSend}>
            Send
          </Button>
        </View>
      </Modal>
      <Button style={{marginTop: 30}} onPress={showModal}>
        Show
      </Button>
    </View>
  );
};
export default React.memo(SentScreen);
