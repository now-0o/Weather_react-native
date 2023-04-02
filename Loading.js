import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading(){
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <Text style={styles.text}>사용자 위치 정보를</Text>
            <Text style={styles.text}>가져오는 중입니다...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex :1,
        justifyContent : 'flex-end',
        paddingHorizontal : 30,
        paddingVertical : 100,
        backgroundColor : "#FDF6AA"
    },
    text : {
        color : "#2c2c2c",
        fontSize : 30
    }
})