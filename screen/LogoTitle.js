import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  WebView,
  Dimensions,
  LayoutAnimation,
  StatusBar,
  Alert,
  ScrollView,
  Platform,
  TextInput,
  AsyncStorage,
} from 'react-native';
export default class LogoTitle extends React.Component {
  // 畫面最上面那條頂端列，只放入圖片，其餘在使用這個class時修改navigationOptions
  render() {
    return (
      <View style={{flex:1 ,alignItems: 'center',justifyContent: 'center' }}>
        {/*用View包起來*/}
        <Image
          source={require('../assets/title_background.png')}
          style={{ 
            width: 144, 
            height: 26 ,
            alignItems: 'center',
            justifyContent: 'center',
            resizeMode: Image.resizeMode.center,
          }}
        />
      </View>
    );
  }
}
//圖片大小1466*280
