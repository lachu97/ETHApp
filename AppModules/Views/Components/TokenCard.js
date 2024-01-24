import * as React from 'react';
import {Avatar, Card} from 'react-native-paper';
import {Pressable} from 'react-native';

const TokenCard = ({title, amount, icon, onPress}) => (
  <Pressable onPress={onPress}>
    <Card.Title
      title={title}
      subtitle={`$ ${amount}`}
      left={props => <Avatar.Image {...props} size={32} source={icon} />}
    />
  </Pressable>
);

export default React.memo(TokenCard);
