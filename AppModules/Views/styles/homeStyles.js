import {StyleSheet} from 'react-native';
import { MD2Colors } from "react-native-paper";
export default StyleSheet.create({
  container: {
    flex: 1,
   // alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: MD2Colors.transparent,
    margin:10
  },
  topContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:5
  },
  avatar:{alignSelf: 'center'},
  title:{
    fontSize:20,
    color:MD2Colors.black,
    fontWeight:'bold',
    alignSelf:'center',
    marginVertical:10
  },
  price:{
    fontSize:25,
    color:MD2Colors.black,
    fontWeight:'bold',
    marginVertical:2,
    alignSelf:'center'
  }
});
