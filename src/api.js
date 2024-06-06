import axios from "axios";

export const getData = async () => {
  try {
    const { data } = await axios.get(
      "https://raw.githubusercontent.com/leejihahaha/myapi/master/myapi/project.json"
    );
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
