import axios from "axios";

export const getData = async () => {
  const { data } = await axios.get(
    "https://raw.githubusercontent.com/leejihahaha/myapi/master/myapi/project.json"
  );
  console.log("Get data!");

  return data;
};
//api를 fetch 하고 json을 리턴하는 함수

// return fetch(
//   "https://raw.githubusercontent.com/leejihahaha/myapi/master/myapi/project.json"
// ).then((response) => response.json());
