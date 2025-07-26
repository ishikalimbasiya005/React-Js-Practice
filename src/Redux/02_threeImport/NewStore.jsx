import axios from "axios";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import reducer from "./Reducer/Fetchreducer";

const mystore = {
    loading : false,
    data : [] ,
    error : null
}

const root = combineReducers({
  fetch: reducer,
});

function Insertdata(a) {
  return async (dispatch) => {
    dispatch({
      type: "Fetch_Start",
    });

    try {
      var response = await axios.post(
        "https://6884aa93745306380a38fe61.mockapi.io/myapi/API/users",
        a
      );

      dispatch({
        type: "Insert_Success",
      });
    } catch (error) {
      dispatch({
        type: "Fetch_Fail",
        payload: error,
      });
    }
  };
}

const NewStore = createStore(root, applyMiddleware(thunk));
export { NewStore, Insertdata };
