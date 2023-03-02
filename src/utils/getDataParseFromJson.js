import data from "../../data.json";

export const getDataParseFromJson = () => {
  const jsonString = JSON.stringify(data);
  const parseFromJson = JSON.parse(jsonString);
  return parseFromJson;
};
