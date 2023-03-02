import { getDataParseFromJson } from "./getDataParseFromJson";

export const getTimerData = (nameFromTime) => {
  const listWithDataFromTime = getDataParseFromJson();
  const time = listWithDataFromTime.map((data) => {
    //console.log(nameFromTime);
    //console.log(data.timeframes[nameFromTime], "datos");
    return {
      ...data,
      timeframes: data.timeframes[nameFromTime],
    };
  });
  return time;
};
