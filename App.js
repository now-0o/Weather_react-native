import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location'
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';

import Loading from './Loading';
import Weather from './Weather';

const API_KEY = "75048e0afbb4b810d242ea7e0a0d38fe";

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState();
  const [weather, setWeather] = useState('');

  getWeather = async (latitude, longitude)=>{
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    console.log(data);
    setTemp(data.main.temp);
    setWeather(data.weather[0].main);
  }
  getLocation = async ()=>{
    try{
      await Location.requestBackgroundPermissionsAsync();
      const {coords : { latitude, longitude }} = await Location.getCurrentPositionAsync();
      await getWeather(latitude, longitude);
      await setIsLoading(false);
    }catch(err){
      Alert.alert("사용자 위치를 찾을 수 없습니다. 위치 정보를 허용해 주세요.")
    }
    
  }
  useEffect(()=>{
    getLocation();
  }, [])
  return (
    isLoading ? <Loading /> : <Weather temp={temp} weather={weather}/>
  );
}

