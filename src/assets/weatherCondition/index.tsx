import partCloudy from "./partial-cloudy-light.svg";
import breezy from "./breezy-icon.svg";
import cloudy from "./11.mostly-cloudy-light.svg";
import rain from "./18.heavy-rain-light.svg";
import mostCloudy from "./07.mostly-cloud-light.svg";
import shower from "./06.rainyday-light.svg";

const WEATHER_COND: any = {
  "30": partCloudy,
  "23": breezy,
  "26": cloudy,
  "12": rain,
  "28": mostCloudy,
  "39": shower,
};

export { WEATHER_COND };
