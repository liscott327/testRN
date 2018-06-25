import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import LogoTitle from './LogoTitle';

export default class QrScannerScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle/>,
    headerStyle: {height: 42 ,backgroundColor:'#DCDDDD'}, //頂端列高度
    headerRight: <View></View>, // 多給右邊的空白這樣顯示返回按鈕時才不會擠到圖片
    // headerLeft:  <Icon name={'chevron-left'} onPress={() => console.log('返回')} />,
  };
  
  

  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});