import axios from "axios";
import { URL_API } from "../../config";
import { CURRENT_ADVENTURE, GET_ADVENTURES } from "../../misc/consts";
import { Dispatch } from "redux";
import { Adventure } from "../../../models/interfaces";

export const getAdventures = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get<{ adventures: Adventure[] }>(`${URL_API}/adventure`);
      dispatch({
        type: GET_ADVENTURES,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching adventures:", error);
    }
  };
};

export const getCurrentAdventure = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get<Adventure>(`${URL_API}/adventure/${id}`);
      dispatch({
        type: CURRENT_ADVENTURE,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching adventures:", error);
    }
  };
};

export const createAdventure = (adventureData: Omit<Adventure, '_id'>) => {
  // @ts-ignore
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post<Adventure>(`${URL_API}/adventure/create`, adventureData);
      return response.data._id;
    } catch (error) {
      console.error("Error creating adventure:", error);
    }
  };
};