import axios from "axios";
export const register = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.API_ENDPOINT}/register`,
      data
    );
    if (response.status === 200) {
    }
  } catch (error) {
    console.log({ error: error });
  }
};
export const userLogin = async (data) => {
  const response = await axios.post(`${process.env.API_ENDPOINT}/login`, data);
  try {
    const response = await axios.post(
      `${process.env.API_ENDPOINT}/register`,
      data
    );
    if (response.status === 200) {
    }
  } catch (error) {
    console.log({ error: error });
  }
};
