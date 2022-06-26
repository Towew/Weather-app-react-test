import React from "react";

interface MyProp {
  dataProps: any;
}

const Atmosphere: React.FC<MyProp> = ({ dataProps }: MyProp) => {
  return (
    <div className="grid text-center grid-cols-4 w-full gap-32 text-7xl overflow-x-scroll lg:overflow-hidden lg:grid-cols-12 shedoW">
      <div className="lg:col-start-2 lg:col-end-3  ">
        <p className="text-lg mb-5 text-center pl-1 uppercase">Humidity</p>
        <p className="font-black">{dataProps.atmosphere.humidity}</p>
      </div>

      <div className="lg:col-start-4 lg:col-end-5">
        <p className="text-lg mb-5 text-center pl-4 uppercase">Pressure</p>
        <p className="font-black -ml-10">{dataProps.atmosphere.pressure}</p>
        <p className="text-4xl pl-9">{dataProps.units.distance}</p>
      </div>

      <div className="lg:col-start-6 lg:col-end-7 ">
        <p className="text-lg uppercase mb-5 text-center pl-4">Rising</p>
        <p className="font-black ml-5">{dataProps.atmosphere.rising}</p>
        <p className="text-4xl pl-2 ml-1">{dataProps.units.speed}</p>
      </div>

      <div className="lg:col-start-8 lg:col-end-9 ">
        <p className="text-lg uppercase mb-5 text-center uppercase">
          Visibility
        </p>
        <p className="font-black -ml-4">{dataProps.atmosphere.visibility}</p>
        <p className="text-4xl pl-2">{dataProps.units.speed}</p>
      </div>
    </div>
  );
};

export default Atmosphere;
