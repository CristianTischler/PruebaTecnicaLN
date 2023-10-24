import axios from "axios";

const URL =
  "https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws";

const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
  },
  withCredentials: false,
});

interface I_AxiosGet {
  url: string;
  params?: any;
}
export const get = async ({ url, params }: I_AxiosGet) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
