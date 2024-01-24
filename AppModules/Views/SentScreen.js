import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {Text, Modal, Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import sentStyles from './styles/sentStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import TokenCard from './Components/TokenCard';

const SentScreen = () => {
  const tokens = useSelector(state => state.reducer.availableTokens);
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState('');
  const showModal = () => setVisible(true);
  const handleSend = () => {
    // Here, you can handle the logic to send the specified amount to the Ethereum address
    console.log('Sending to:');
    console.log('Amount:');
    // Add your logic to estimate gas fees and perform the transaction
    // ...

    // After handling the action, hide the modal
    hideModal();
  };
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  const renderTokens = ({item}) => (
    <TokenCard
      title={item.name}
      amount={item.amount}
      icon={item.icon}
      onPress={showModal}
    />
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
          <Text>Ethereum Address</Text>
          <TextInput
            style={sentStyles.input}
            placeholder="Enter Ethereum Address"
            value={toAddress}
            onChangeText={text => setToAddress(text)}
          />
          <Text>Amount</Text>
          <TextInput
            style={sentStyles.input}
            placeholder="Enter Amount"
            value={amount}
            onChangeText={text => setAmount(text)}
          />
          {/* Display estimated gas fees here */}
          {/* ... */}
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
