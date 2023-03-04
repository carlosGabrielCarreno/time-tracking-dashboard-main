export const getTimeFrames = (nameClass, timeFrames) => {
  for (let index = 0; index < timeFrames.length; index++) {
    if (nameClass.toUpperCase() === timeFrames[index].title.toUpperCase()) {
      return {
        current: timeFrames[index].timeframes.current,
        previous: timeFrames[index].timeframes.previous,
      };
    }
    if (nameClass === "self-care" && timeFrames[index].title === "Self Care") {
      return {
        current: timeFrames[index].timeframes.current,
        previous: timeFrames[index].timeframes.previous,
      };
    }
  }
};
