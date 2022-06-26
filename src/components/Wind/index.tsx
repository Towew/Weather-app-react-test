import React from "react";

interface MyProp {
  dataProps: any;
}

const Wind: React.FC<MyProp> = ({ dataProps }: MyProp) => {
  return (
    <div className="grid text-center grid-cols-3 w-full gap-32 text-7xl overflow-x-scroll lg:overflow-hidden lg:grid-cols-12 shedoW">
      <div className="lg:col-start-3 lg:col-end-4  ">
        <p className="text-lg mb-5 text-center pl-5">CHILL</p>
        <p className="font-black">{dataProps.wind.chill}</p>
      </div>

      <div className="lg:col-start-5 lg:col-end-6">
        <p className="text-lg mb-5 text-center pl-3">DIRECTION</p>
        <p className="font-black">{dataProps.wind.direction}</p>
        <p className="text-4xl pl-9">{dataProps.units.distance}</p>
      </div>

      <div className="lg:col-start-7 lg:col-end-8 ">
        <p className="text-lg uppercase mb-5 text-center pl-3">Speed</p>
        <p className="font-black">{dataProps.wind.speed}</p>
        <p className="text-4xl pl-2">{dataProps.units.speed}</p>
      </div>
    </div>
  );
};

export default Wind;
