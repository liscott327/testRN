# chingshinRN
|版本||
|-|-|
|npm|6.1.0|
|nvm|1.1.6|
|node|9.11.1|
|exp|55.0.2|
|react-native-cli|2.0.1|
|react-native|0.55.4|

# 去除Expo化
移除有使用到expo套件或頁面
* 使用expo套件`import`到也註記掉
* 有使用到的頁面也拿掉

專案轉移
* 下方顯示圖案不正確修正
路徑:`...\node_modules\rn-viewpager\viewpager\indicator\PagerTabIndicator.js`
修改style與下方一致就可以正確顯示
```JSX
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 6,
        paddingBottom: 4,
        borderTopWidth: 0.5,
        borderTopColor: '#DCDDDD',
        backgroundColor: '#DCDDDD'
    },
    itemContainer: {
        alignItems: 'center',
        flex: 1
    },
    image: {
        height: 36,//修改圖片顯示高度
        width: 36,//修改圖片顯示寬度
    },
    text: {
        marginTop: 4,
        fontSize: 12,
        color: '#333333'
    },
    textSelected: {
        marginTop: 4,
        fontSize: 12,
        color: '#333333'//按下後的顏色
    }
})
```
### 錯誤紀錄

```
npm install react-native-camera --save
react-native link react-native-camera
```
會無法啟動專案修改路徑中的程式碼

android/build.gradle
```JSX
// Top-level build file where you can add configuration options common to all sub-projects/modules.

buildscript {
    repositories {
        jcenter()
        google()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.0.1'

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}

allprojects {
    repositories {
        mavenLocal()
        jcenter()
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url "$rootDir/../node_modules/react-native/android"
        }
        google()
    }
}


subprojects {
  project.configurations.all {
     resolutionStrategy.eachDependency { details ->
        if (details.requested.group == 'com.android.support'
              && !details.requested.name.contains('multidex') ) {
           details.useVersion "27.1.0"
        }
     }
  }
}
```
android/gradle/wrapper/gradle-wrapper.properties
```JSX
distributionUrl=https\://services.gradle.org/distributions/gradle-4.1-all.zip
```

android/app/build.gradle
```JSX
android{
  compileSdkVersion 27
  buildToolsVersion "27.0.0"
  
  .....
}
```
[資料來源]https://github.com/react-native-community/react-native-camera/issues/1530()

### 參考元件
[ReactNative QR Code](https://medium.com/@adrawgill/reactnative-qr-code-f6bca33704f2)

[react-native-qrcode-scanner](https://github.com/moaazsidat/react-native-qrcode-scanner)

[to do list](https://snack.expo.io/ryNAHKnPW)