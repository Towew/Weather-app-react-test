import React, { useEffect, useState } from "react";
import { WEATHER_COND } from "../../assets/weatherCondition";

interface MyProp {
  dataProps: any;
}

const Weather: React.FC<MyProp> = (props: MyProp) => {
  const [weather, setWeather] = useState(props.dataProps.item.forecast);

  let dataArr: any = weather.slice(0, 6);

  let dateNow: String = props.dataProps.item.condition.date;

  console.log(dateNow.substring(5, 16));

  return (
    <>
      {dataArr.map((item: any, index: any) => (
        <div
          className={`flex py-5 w-96 hover:border-weather weather-hover ${
            dateNow.substring(5, 16) == item.date && "border-weather"
          }`}
          key={index}
        >
          <div className="flex flex-col items-center">
            <p
              className={`shedoW text-xs md:text-lg ${
                dateNow.substring(5, 16) != item.date && "text-slate-200"
              }`}
            >
              {item.date}
            </p>
            <p
              className={`${
                dateNow.substring(5, 16) != item.date && "text-slate-200"
              }`}
            >
              {item.day}
            </p>
            <img
              src={WEATHER_COND[item.code]}
              className="hover:animate-pulse"
              alt="weather-icon"
            />

            <div className="flex gap-5 shedoW">
              <p>{item.high}°</p>
              <p>{item.low}°</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Weather;
