import { apiURL } from "../constants/config";
import axios from 'axios'

export const makeQuery = async (data) => {
    try {
        let URL = apiURL + "messages";
        console.log("API URL endpoint = ", URL);
        console.log(data);
        let resp = await axios.post(URL, data);
        // console.log(resp);
        return {
          success: true,
          data: resp.data,
          message: "",
        };
      } catch (e) {
        return {
          success: false,
          message: e.message,
        };
      }
}