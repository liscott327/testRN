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