import React from 'react';
import { useState } from 'react';
import useCurrentTime from '../hooks/useCurrentTime';
import useCurrentWeather from '../hooks/useCurrentWeather';
import ButtonToogle from './ButtonToogle'
import useSetBackgroud from '../hooks/useSetBackgroud';
import '../index.css'

const WeatherCardInfo = () => {
  const {
    city,
    country,
    temp,
    feelsTemp,
    maxTemp,
    minTemp,
    humidity,
    windSpeed,
    weatherMain,
    weatherDescription,
    weatherIcon,
  } = useCurrentWeather();

  const {
    hrs,
    mnts,
    sec,
    year,
    month,
    weekDay,
    day
  } = useCurrentTime();

  const { background } = useSetBackgroud();

  const [isCelcius, setIsCelcius] = useState(false);
  const [isFahrenheit, setIsFahrenheit] = useState(false);


  const toCelcius = () => {
    setIsCelcius(!isCelcius);
    setIsFahrenheit(false);
  };

  const toFahrenheit = () => {
    setIsFahrenheit(!isFahrenheit);
    setIsCelcius(false);
  };

  const changeUnits = (temp) => {
    temp = parseInt(temp);
    if (isCelcius === false && isFahrenheit === false) {
      return temp.toFixed();
    } else if (isCelcius) {
      temp = (temp - 273.15);
      return temp.toFixed();
    } else if (isFahrenheit) {
      temp = ((temp - 273.15) * (9 / 5) + 32);
      return temp.toFixed();
    }
  };

  const changeWindSpeedUnits = (windSpeed) => {
    windSpeed = parseInt(windSpeed);
    return (windSpeed * 3.6).toFixed();
  };

  return (
    <div className={background}>
      <p>{`${city}, ${country}`}</p>
      <p>{`${changeUnits(temp)}°${isCelcius ? "C" : `${isFahrenheit ? "F" : "K"}`}`}</p>
      <p>{`${changeUnits(feelsTemp)}°${isCelcius ? "C" : `${isFahrenheit ? "F" : "K"}`}`}</p>
      <p>{`${changeUnits(maxTemp)}°${isCelcius ? "C" : `${isFahrenheit ? "F" : "K"}`}`}</p>
      <p>{`${changeUnits(minTemp)}°${isCelcius ? "C" : `${isFahrenheit ? "F" : "K"}`}`}</p>
      <p>{`${humidity}%`}</p>
      <p>{`${changeWindSpeedUnits(windSpeed)} km/h`}</p>
      <p>{weatherMain}</p>
      <p>{weatherDescription}</p>
      <img src={weatherIcon} alt="" />
      <h2>{`${hrs}:${mnts}:${sec}`}</h2>
      <p>{`${weekDay}, ${day} ${month} ${year}`}</p>
      <ButtonToogle
        ButtonTextContent='celcius'
        IsClicked={toCelcius}
      />
      <ButtonToogle
        ButtonTextContent='fahrenheit'
        IsClicked={toFahrenheit}
      />
    </div>
  );
};

export default WeatherCardInfo;