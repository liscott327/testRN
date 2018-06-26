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
import MapView from 'react-native-maps';
import { Button, Header, Icon, ListItem, CheckBox  } from 'react-native-elements';

const list = [
  {
    name: '988 公園店',
    avatar_url: '',
    subtitle: '台南市北區公園路822-1號',
  },
  {
    name: '100 育德店',
    avatar_url: '',
    subtitle: '台南市北區育德路520號',
  },
  {
    name: '301 四平店',
    avatar_url: '',
    subtitle: '台中市北屯區后庄路71-3號',
  },
  {
    name: '358 北平店',
    avatar_url: '',
    subtitle: '台中市北屯區北平區三段151號',
  },
  {
    name: '456 后庄店',
    avatar_url: '',
    subtitle: '台中市北屯區后庄路22號',
  },
  {
    name: '456 后庄店',
    avatar_url: '',
    subtitle: '台中市北屯區后庄路22號',
  },
  {
    name: '456 后庄店',
    avatar_url: '',
    subtitle: '台中市北屯區后庄路22號',
  },
  {
    name: '456 后庄店',
    avatar_url: '',
    subtitle: '台中市北屯區后庄路22號',
  },
    

];
export default class Store extends React.Component {
  //  門市畫面
  // state = {
  //   mapRegion: { 
  //     latitude: 24.175400, 
  //     longitude: 120.690504, 
  //     latitudeDelta: 0.005, 
  //     longitudeDelta: 0.005, 
  //   },
  //   locationResult: null,
  //   location: {coords: { latitude: 24.175400, longitude: 120.690504}},
  //   text: null,
  // };
  // componentDidMount() {
  //   this._getLocationAsync();
  // }
  // componentWillMount() {
  //   if (Platform.OS === 'android' && !Constants.isDevice) {
  //     this.setState({
  //       errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
  //     });
  //   } else {
  //     this._getLocationAsync();
  //   }
    
  // }

  // _handleMapRegionChange = mapRegion => {
  //   this.setState({ mapRegion });
  // };

  // _getLocationAsync = async () => {
  //   let { status } = await Permissions.askAsync(Permissions.LOCATION);
  //   if (status !== 'granted') {
  //     this.setState({
  //       locationResult: '讀取位置的權限被拒絕',
  //       location,
  //     });
  //   }

  //   let location = await Location.getCurrentPositionAsync({});
  //   this.setState({ locationResult: JSON.stringify(location), location, });
  // };
  render() {
    return (
      <View style={{ flex:1 }}>
        
      
      {/* <MapView
        //   style={{ flex:1 }}
        //   region={{ 
        //     latitude: this.state.location.coords.latitude, 
        //     longitude: this.state.location.coords.longitude, 
        //     latitudeDelta: 0.005, 
        //     longitudeDelta: 0.005 
        //   }}
        //   //onRegionChange={this._handleMapRegionChange}//鎖定不讓使用者移動
        // >
        //   <MapView.Marker
        //     coordinate={this.state.location.coords}
        //     title="我的位置"
        //     //description="Some description"
        //   />
        // </MapView>*/}
        {/* 塞入itemlist做附近店面列表*/}  
        <ScrollView style={{flex: 1}}>
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url } }}
                title={l.name}
                subtitle={l.subtitle}
              />
            ))
          }
        </ScrollView>
      </View>
    /* // 這是google map API金鑰 AIzaSyD74INcdDqbZOxTy_OM3qnxg9BCEYK7UTU */
    );
  }
}