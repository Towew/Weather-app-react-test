import React, { useState } from "react";
import dataJson from "../../dataJson/weather.json";
import { WEATHER_COND } from "../../assets/weatherCondition";
import Weather from "../../components/Weather";
import Wind from "../../components/Wind";
import Atmosphere from "../../components/Atmosphere";
import Astronomy from "../../components/Astronomy";

const Homepage: React.FC = () => {
  const [data] = useState(dataJson.query.results.channel);
  const [toggle, setToggle] = useState(<Weather dataProps={data} />);
  const [trigger, setTrigger] = useState("Weather");

  document.title = data.title;

  const handleWeather = () => {
    setToggle(<Weather dataProps={data} />);
    setTrigger("Weather");
  };

  const handleWind = () => {
    setToggle(<Wind dataProps={data} />);
    setTrigger("Wind");
  };

  const handleAtmosphere = () => {
    setToggle(<Atmosphere dataProps={data} />);
    setTrigger("Atmosphere");
  };

  const handleAstronomy = () => {
    setToggle(<Astronomy dataProps={data} />);
    setTrigger("Astronomy");
  };

  return (
    <div className="bg-weather font-Over text-white h-full">
      <div
        className="headerContainer
        container flex flex-col
      justify-center items-center mx-auto text-center"
      >
        <h1 className="text-4xl font-bold shedoW pt-10">
          {data.location.city}
        </h1>
        <p className="text-lg font-light">
          {data.location.city}, {data.location.region}, {data.location.country}
        </p>
        <img
          src={WEATHER_COND[data.item.condition.code]}
          alt="weather-icon"
          className="h-[320px] w-[320px] animate-pulse"
        />
        <div className="tempCont flex relative">
          <p className="text-8xl font-bold innerShedoW mr-4 mt-3">
            {data.item.condition.temp}
          </p>
          <span className="absolute right-0 text-2xl">
            °{data.units.temperature}
          </span>
        </div>
        <p className="text-4xl font-normal shedoW">
          {data.item.condition.text}
        </p>
      </div>
      <div className="py-5 mx-auto container flex flex-col ">
        <div className="overflow-x-auto">
          <ul className="grid grid-cols-4 gap-36 items-center lg:gap-16 text-2xl border-b lg:grid-cols-12 border-gray-200/25 ">
            <li
              onClick={() => handleWeather()}
              className={`cursor-pointer transition duration-500 ease-in-out lg:col-start-3 lg:col-end-4 ${
                trigger == "Weather" && "border-b "
              }
              ${trigger != "Weather" && "opacity-40"}
              `}
            >
              Weather
            </li>
            <li
              onClick={() => handleWind()}
              className={` cursor-pointer transition duration-500 ease-in-out lg:col-start-5 lg:col-end-6 ${
                trigger == "Wind" && "border-b "
              } ${trigger != "Wind" && "opacity-40"}`}
            >
              Wind
            </li>
            <li
              onClick={() => handleAtmosphere()}
              className={` cursor-pointer transition duration-500 ease-in-out lg:col-start-7 lg:col-end-8 ${
                trigger == "Atmosphere" && "border-b "
              }
              ${trigger != "Atmosphere" && "opacity-40"}
              `}
            >
              Atmosphere
            </li>
            <li
              onClick={() => handleAstronomy()}
              className={` cursor-pointer transition duration-500 ease-in-out lg:col-start-9 lg:col-end-10 ${
                trigger == "Astronomy" && "border-b"
              }
              ${trigger != "Astronomy" && "opacity-40"}
              `}
            >
              Astronomy
            </li>
          </ul>
        </div>

        <div className="my-10 px-16 flex gap-5 overflow-x-scroll lg:overflow-x-hidden">
          {toggle}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
