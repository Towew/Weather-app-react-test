import React, { useState } from "react";

interface MyProp {
  dataProps: any;
}

const Astronomy: React.FC<MyProp> = ({ dataProps }: MyProp) => {
  const [sunrise] = useState({
    hour: dataProps.astronomy.sunrise.substring(0, 4),
    ampm: dataProps.astronomy.sunrise.substring(5, 7),
  });
  const [sunset] = useState({
    hour: dataProps.astronomy.sunset.substring(0, 4),
    ampm: dataProps.astronomy.sunset.substring(5, 7),
  });

  return (
    <div className="grid text-center grid-cols-2 w-full gap-32 text-7xl overflow-x-scroll lg:overflow-hidden lg:grid-cols-12 shedoW">
      <div className="lg:col-start-4 lg:col-end-5">
        <p className="text-lg mb-5 text-center pl-5">SUNRISE</p>
        <p className="font-black -ml-5">{sunrise.hour}</p>
        <p className="text-4xl pl-7">{sunrise.ampm}</p>
      </div>

      <div className="lg:col-start-6 lg:col-end-7">
        <p className="text-lg mb-5 text-center ml-11">SUNSET</p>
        <p className="font-black">{sunset.hour}</p>
        <p className="text-4xl ml-12">{sunset.ampm}</p>
      </div>
    </div>
  );
};

export default Astronomy;
