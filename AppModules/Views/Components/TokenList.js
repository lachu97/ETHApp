import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {FlatList, View} from 'react-native';
import {MD2Colors, Text} from 'react-native-paper';
const TokenList = () => {
  const tokens = useSelector(state => state.reducer.userTokens);
  const renderItems = useCallback(({item}) => {
    <Text>{item.name}</Text>;
  }, []);
  const renderEmpty = useCallback(
    () => (
      <Text
        style={{
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 19,
          marginVertical: 15,
        }}>
        No Token History
      </Text>
    ),
    [],
  );
  const renderHeader = useCallback(
    () => (
      <Text style={{fontSize: 20, marginVertical: 10}}>
        Transaction History
      </Text>
    ),
    [],
  );
  return (
    <FlatList
      data={tokens}
      style={{backgroundColor: MD2Colors.transparent}}
      renderItem={renderItems}
      ListEmptyComponent={renderEmpty}
      ListHeaderComponent={renderHeader}
    />
  );
};
export default React.memo(TokenList);
