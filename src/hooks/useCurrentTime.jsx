import { useEffect, useState } from 'react';

const useCurrentTime = () => {

  const dateArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const weekDayArray = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const [hrs, setHrs] = useState(0);
  const [mnts, setMnts] = useState(0);
  const [sec, setSec] = useState(0);
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [weekDay, setWeekDay] = useState(0);
  const [day, setDay] = useState(0);

  const getTime = () => {
    const curretTime = () => new Date();
    setHrs(curretTime().getHours());
    setMnts(curretTime().getMinutes());
    setSec(curretTime().getSeconds());
    setYear(curretTime().getFullYear());
    setMonth(curretTime().getMonth());
    setWeekDay(curretTime().getDay());
    setDay(curretTime().getDate());
  };

  useEffect(() => {
    getTime();
    return (
      setInterval(() => { getTime() }, 1000)
    );
  }, []);


  return {
    hrs: hrs < 10 ? `0${hrs}` : hrs,
    mnts: mnts < 10 ? `0${mnts}` : mnts,
    sec: sec < 10 ? `0${sec}` : sec,
    year,
    month: dateArray[month],
    weekDay: weekDayArray[weekDay],
    day,
  };
};

export default useCurrentTime;