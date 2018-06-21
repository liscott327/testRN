import React from 'react';
import { 
  View,
  WebView, 
  Dimensions,
  Platform,
  ActivityIndicator,
  StyleSheet,
  Text,
  Alert,
} from 'react-native';
const mobile = Dimensions.get('window');  //定義mobile為Dimensions.get('window')，偵測裝置的大小
export default class Facebook extends React.Component {
  // 畫面最上面那條頂端列，只放入圖片，其餘在使用這個class時修改navigationOptions
  render() {
    return (
      <View style={{flex:1}}>
        <WebView source={{ uri: 'https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/chingshin1987/&tabs=timeline&width='+mobile.width+'&height='+(mobile.height-122)}}
          onLoad={() => console.log('onLoad')}
          onLoadEnd={() => console.log('onLoadEnd')}
          onLoadStart={() => console.log('onLoadStart')}  //開始載入webview時，執行函數
          //加載時發生錯誤
          renderError={() => {
            console.log('renderError');
            return Alert.alert('網路連接異常請檢察是否已連線');
          }}
          //加載時顯示轉圈動畫
          renderLoading={() => {
            return <View style={[styles.container, styles.horizontal]}><ActivityIndicator size="large" color="#0000ff" /></View>;
          }}

        
        
          onNavigationStateChange={this.onNavigationStateChange} 
          startInLoadingState={true} //這會在加載完FB畫面完成前先做renderLoading
          scalesPageToFit={true} //自動調整Web畫面適應裝置大小ps.ios和android不一樣結果
          scrollEnabled={false} //僅限ios是否啟用滾動
          
          //decelerationRate="normal"//僅限ios滑動時當手指離開螢幕時的慣性滑動停止時間         
          //automaticallyAdjustContentInsets={false}
          // javaScriptEnabled={false}
          
          style={{width:mobile.width ,height:mobile.height}}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});