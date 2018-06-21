import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { BarCodeScanner, Permissions, SQLite,  } from 'expo';
import LogoTitle from './LogoTitle';
const db = SQLite.openDatabase('db.db');
export default class ScannerScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle/>,
    headerStyle: {height: 42 ,backgroundColor:'#DCDDDD'}, //頂端列高度
    headerRight: <View></View>, // 多給右邊的空白這樣顯示返回按鈕時才不會擠到圖片
    // headerLeft:  <Icon name={'chevron-left'} onPress={() => console.log('返回')} />,
  };
  constructor(props){
    super(props);
    this.state={
      scannedBarcodeData: 'none',
      numBarcodesScanned: 0,
      hasCameraPermission: null,
      text: null
      
    };

  }
  //在渲染之後觸發一次
  componentDidMount() {
    this._requestCameraPermission();    
  }
  
  // 取得相機權限
  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  // 讀取條碼
  _handleBarCodeRead = data => {
    this.add(JSON.stringify(data)); //將讀取到的內容轉成JSON並加入資料庫
    // Alert.alert(
    //   'Scan successful!',
    //   JSON.stringify(data),
    //   [
    //     {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    //     {text: '確定', onPress: () => console.log('OK Pressed')},
    //   ],
    //   { cancelable: false }
    // )
    // onPress={() => this.props.navigation.navigate('Scanner')}
    this.update;
    this.props.navigation.navigate('Home');// 返回首頁
  };

  add(text) {
    db.transaction(
      tx => {
        tx.executeSql('insert into items (done, value) values (0, ?)', [text]);
        tx.executeSql('select * from items', [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      null,
      this.update
    );
  }

  update = () => {
    this.todo && this.todo.update();
    this.done && this.done.update();
  }
  

  render() {
    return (
      <View style={styles.container}>
        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              
              style={{ height: 300, width: 300 }}//
            />
        }
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