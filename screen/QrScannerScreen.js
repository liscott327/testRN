import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
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
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }

  

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={
          <Text style={styles.centerText}>
            Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
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
