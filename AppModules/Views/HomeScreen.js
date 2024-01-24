import React, {useEffect} from 'react';
import {Pressable, View} from 'react-native';
import {Text, Icon, Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import homeStyles from './styles/homeStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import UserActions from './Components/userActions';
import TokenList from './Components/TokenList';
import {alchemy} from '../alchemy/AlchemyAPI';
import { addTokenBalance, addTokens, addWallets } from "../Redux/AppReducer";
import {useDispatch} from 'react-redux';
const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    alchemy.core
      .getAssetTransfers({
        fromBlock: '0x0',
        fromAddress: '0x994b342dd87fc825f66e51ffa3ef71ad818b6893',
        category: ['erc721', 'external', 'erc20'],
      })
      .then(r => {
        dispatch(addWallets('0x994b342dd87fc825f66e51ffa3ef71ad818b6893'));
        dispatch(addTokens(r.transfers));
      });
      alchemy.core.getBalance('0x994b342dd87fc825f66e51ffa3ef71ad818b6893').then(r =>dispatch(addTokenBalance(r._hex)))
   // alchemy.core.getBlock('latest').then(r => console.log(r));
  }, [dispatch]);
  const navigation = useNavigation();
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.topContainer}>
        <Icon
          style={{marginVertical: 5}}
          source={require('../assets/four.png')}
          size={25}
         // removeClippedSubviews
        />
        <Icon
          style={{marginVertical: 5}}
          source={require('../assets/more.png')}
          size={25}
        />
      </View>
      <View style={homeStyles.avatar}>
        <Avatar.Image
          style={{marginVertical: 5}}
          source={require('../assets/man.png')}
          size={95}
        />
        <Text style={homeStyles.title}>Lakshu</Text>
        <Text style={homeStyles.price}>$ 0.89</Text>
      </View>
      <UserActions />
      <TokenList />
    </View>
  );
};
export default React.memo(HomeScreen);
