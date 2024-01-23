import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import {Text} from 'react-native-paper';
const TokenList = () => {
  const tokens = useSelector(state => state.reducer.userTokens);
  const renderItems = ({item}) => {
    <Text>{item.name}</Text>;
  };
  const renderEmpty = useCallback(
    () => (
      <Text style={{alignSelf: 'center', fontWeight: 'bold', fontSize: 19}}>
        No Token History
      </Text>
    ),
    [],
  );
  return (
    <FlatList
      data={tokens}
      renderItem={renderItems}
      ListEmptyComponent={renderEmpty}
    />
  );
};
export default React.memo(TokenList);
