/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
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
import { createStackNavigator } from 'react-navigation'; 
import { PagerTabIndicator, IndicatorViewPager } from 'rn-viewpager';
import { Button, Header, Icon, ListItem, CheckBox  } from 'react-native-elements';

import LogoTitle from './screen/LogoTitle';
import LoginScreen from './screen/LoginScreen';
import PersonScreen from './screen/PersonScreen';
import RegisterScreen from './screen/RegisterScreen';
//import ScannerScreen from './screen/ScannerScreen';
import Facebook from './screen/Facebook';
import Best from './screen/Best';
import ForgetScreen from './screen/ForgetScreen';
import Store from './screen/Store';
import Notice from './screen/Notice';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const { height, width } = Dimensions.get('window'); // 裝置長寬

class HomeScreen extends React.Component {
  // static navigationOptions = {
  //   // headerTitle instead of title
  //   headerTitle: <LogoTitle/>,
  //   headerStyle: {height: 42 ,backgroundColor:'#DCDDDD'} //頂端列高度
  // };
  // state = {
  //   text: null,
  // };

  // // 在渲染之後觸發一次
  // componentDidMount() {
    
  // }
  
  // // 在渲染之前觸發一次
  // componentWillMount() {
    
  // }

  //按下按鈕後彈出視窗
  onPressButton() {
    Alert.alert('你已經按下按鈕囉');
  }

  render() {

    return (

      <View style={{ flex: 1, paddingTop: 0, backgroundColor: '#DCDDDD' }}>
        <IndicatorViewPager style={styles.header} indicator={this.renderTabIndicator()}>
          <View>
            {/* 清心FB粉專 */}
            <Facebook/>
          </View>
          <View>
            {/* 排行榜圖片 */}
            <Best/>
          </View>
          <View style={page.store}>
            {/* 門市位置 */}
            <Store/>
          </View>
          <View>
            <Notice/>
          </View>
          <View style={page.member}>
            {/* 會員頁面 */}
            {/*<Member/>*/}
            <Button
              buttonStyle={{
                backgroundColor: 'white',
                width: 200,
                height: 70,
                borderColor: '#6E6661',
                borderWidth: 1,
                borderRadius: 5,
              }}
              title="登入"
              fontSize={30}
              color="#6E6661"
              onPress={() => this.props.navigation.navigate('Login')}
            />
            <Text></Text>
            <Button
              buttonStyle={{
                backgroundColor: 'white',
                width: 200,
                height: 70,
                borderColor: '#6E6661',
                borderWidth: 1,
                borderRadius: 5,
              }}
              title="註冊"
              fontSize={30}
              color="#6E6661"
              onPress={() => this.props.navigation.navigate('Register')}
            />
            <Text> </Text>
            <Button
              
              color="#444444"
              backgroundColor="#FFFFFF"
              borderRadiusColor="#444444"
              borderRadius={10}
              fontSize={15}
              title="忘記密碼"
              onPress={() => this.props.navigation.navigate('Forget')}
            /> 
          </View>
        </IndicatorViewPager>
      </View>
    );
    
  }
  renderTabIndicator() {
    // 首頁、排行榜、門市查詢、通知、會員
    // index、best、store、notice、member
    // * 下方按鈕色碼 (灰色)#595656 (綠色)#B4B51F
    const tabs = [{
      text: '首頁',
      iconSource: require('./assets/index_btn.png'),
      selectedIconSource: require('./assets/index_btn_click.png'),
    }, {
      text: '排行',
      iconSource: require('./assets/best_btn.png'),
      selectedIconSource: require('./assets/best_btn_click.png'),
    }, {
      text: '門市',
      iconSource: require('./assets/store_btn.png'),
      selectedIconSource: require('./assets/store_btn_click.png'),
    }, {
      text: '通知',
      iconSource: require('./assets/notice_btn.png'),
      selectedIconSource: require('./assets/notice_btn_click.png'),
    }, {
      text: '會員',
      iconSource: require('./assets/member_btn.png'),
      selectedIconSource: require('./assets/member_btn_click.png'),
    }];
    return <PagerTabIndicator tabs={tabs} />;
  }
}
  const RootStack = createStackNavigator(
    {
      Home: HomeScreen, //首頁、排行、門市、通知、會員5個分頁
      //Scanner: ScannerScreen, //掃描頁面
      Login: LoginScreen, //會員登入
      Register: RegisterScreen, //註冊說明
      Person: PersonScreen, //註冊輸入個資
      Forget: ForgetScreen, //忘記密碼
      Store: Store, //門市位置

    },
    {
      initialRouteName: 'Home',
      navigationOptions: {
        // headerLeft:<View></View>,
        headerTitle: <LogoTitle/>,
        headerStyle: {height: 42 ,backgroundColor:'#DCDDDD'}, //頂端列高度
        // headerRight: <View></View>,
        // headerLeft:  <Icon name={'chevron-left'} onPress={() => console.log('返回')} />,
      },
    },
  );
  
  export default class App extends React.Component {
    render() {
      return <RootStack/>;
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  headerImg: {
    // 最上面的那條
    height: 34,
    width: 153,
    // backgroundColor:'#F6F6F6',
    //  alignItems: 'center',
    alignItems: 'center',
    marginLeft: '27%', // 頂端列圖片置中
  },
  header: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
});


// 頁面樣式index、best、store、notice、member
const page = StyleSheet.create({
  index: {
    flex: 1,
    backgroundColor: 'cadetblue',
  },
  best: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#AED49D',
    // resizeMode :'center'
  },
  stroe: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'#1AA094',
  },
  notice: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor:'#1A8094',
  },
  member: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});
