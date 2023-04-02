import react, {useState} from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Fontisto ,MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from "expo-linear-gradient";

// 날씨 목록
// Thunderstorm, Drizzle, Rain, Snow, Atmosphere, Clear, Clouds
// Haze, Mist, Fog = 안개
// Dust, Sand

const weatherOptions = {
    Clear : {
        iconName : "day-sunny",
        gradient : ["#ffe259", "#ffa751"],
        title : "맑음",
        subtitle : "화창한 날이야! 진진"
    },
    Rain : {
        iconName : "weather-pouring",
        gradient : ["#00C6FB", "#005BEA"],
        title : "비",
        subtitle : "우산 꼭 챙겨! 진진"
    },
    Drizzle : {
        iconName : "weather-pouring",
        gradient : ["#00C6FB", "#005BEA"],
        title : "비",
        subtitle : "우산 꼭 챙겨! 진진"
    },
    Snow : {
        iconName : "weather-sonwy-heavy",
        gradient : ["#7DE2FC","B9B6E5"],
        title : "눈",
        subtitle : "진아야 밖에 눈 와"
    },
    Clouds : {
        iconName : "weather-cloudy",
        gradient : ["#D7D2CC", "#304352"],
        title : "구름",
        subtitle : "오늘은 구름이 많네"
    },
    Haze : {
        iconName : "weather-fog",
        gradient : ["#BBD2C5", "#536976"],
        title : "안개",
        subtitle : "옅은 안개인데 미세먼지가 있으니 조심해"
    },
    Fog : {
        iconName : "weather-fog",
        gradient : ["#BBD2C5", "#536976"],
        title : "안개",
        subtitle : "짙은 안개야, 조심히 다녀야 해"
    },
    Mist : {
        iconName : "weather-fog",
        gradient : ["#BBD2C5", "#536976"],
        title : "안개",
        subtitle : "옅은 안개지만 그래도 조심!"
    },
    Dust : {
        iconName : "weather-fog",
        gradient : ["#D1913C", "#FFD194"],
        title : "미세먼지",
        subtitle : "밖에 오래 다니지 마"
    },
    Sand : {
        iconName : "weather-fog",
        gradient : ["#D1913C", "#FFD194"],
        title : "황사",
        subtitle : "마스크 꼭 쓰고 나가는 날"
    },
    Thunderstorm : {
        iconName : "weather-lightning",
        gradient : ["#2c3e50", "#3498db"],
        title : "뇌우",
        subtitle : "도망쳐.. 연차 내고 집 콕"
    },
}

export default function Weather ({
    temp,
    weather
}){
    return (
        <LinearGradient
    // Background Linear Gradient
        colors={weatherOptions[weather] ? weatherOptions[weather].gradient : ["#6190E8", "#A7BFE8"]}
        style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfCon}>
                {weatherOptions[weather] ? weather=='Clear' ? <Fontisto name={weatherOptions[weather].iconName} size={100} color="white"/> : <MaterialCommunityIcons name={weatherOptions[weather].iconName} size={100} color="white" /> : <MaterialCommunityIcons name="cloud-question" size={100} color="white" />}
                <Text style={styles.temp}>{Math.round(temp)}°</Text>
            </View>
            <View style={styles.halfCon}>
                <Text style={styles.title}>{weatherOptions[weather] ? weatherOptions[weather].title : "날씨 정보가 없어요"}</Text>
                <Text style={styles.subtitle}>{weatherOptions[weather] ? weatherOptions[weather].subtitle : "빠른 시일 내 수정하겠습니당"}</Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    halfCon : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        marginTop : 50
    },
    temp : {
        fontSize : 50,
        color : "#FFF",
        marginVertical : 10,
        fontWeight: "300"
    },
    title : {
        color : "#FFF",
        fontSize : 46,
        fontWeight : "300",
        marginBottom : 20
    },
    subtitle : {
        color : "#FFF",
        fontWeight : "600",
        fontSize : 14
    }
})