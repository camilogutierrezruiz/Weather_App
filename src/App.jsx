import React from 'react';
import WeatherCardInfo from './components/WeatherCardInfo';
import useSetBackgroud from './hooks/useSetBackgroud';
import './index.css'

function App() {

  const { background } = useSetBackgroud();

  return (
    <div className={`App bg__${background}`}>
      <WeatherCardInfo />
    </div>
  );
}

export default App;
