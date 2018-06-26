import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import { Button } from 'react-native-elements';
import QRCodeScanner from 'react-native-qrcode-scanner';
import LogoTitle from './LogoTitle';

export default class QrScannerScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle/>,
    headerStyle: {height: 42 ,backgroundColor:'#DCDDDD'}, //頂端列高度
    headerRight: <View></View>, // 多給右邊的空白這樣顯示返回按鈕時才不會擠到圖片
    // headerLeft:  <Icon name={'chevron-left'} onPress={() => console.log('返回')} />,
  };
  onSuccess(e) {
    Alert.alert(e.data);//跳出視窗(僅能顯示前幾個字)
    console.log(e.data);//印出所有值
    this.props.navigation.navigate('Home');
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
  }

  

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={
          <Text style={styles.centerText}>
            <Text style={styles.textBold}>請對準發票左邊QRCode</Text>
          </Text>
        }
        bottomContent={
          <TouchableOpacity 
            style={styles.buttonTouchable}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.buttonText}>返回</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
