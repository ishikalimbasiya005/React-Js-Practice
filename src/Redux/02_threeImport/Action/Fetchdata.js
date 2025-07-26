import axios from "axios";

function Fetchdata() {
  return async (dispatch) => {
    dispatch({
      type: "Fetch_Start",
    });

    try {
      var response = await axios.get("https://6884aa93745306380a38fe61.mockapi.io/myapi/API/users"
      );

      dispatch({
        type: "Fetch_Success",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "Fetch_Fail",
        payload: error
      });
    }
  };
}

// INSERT DATA
export const Insertdata = (obj) => {
  return async (dispatch) => {
    const res = await fetch("https://6884aa93745306380a38fe61.mockapi.io/myapi/API/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    const data = await res.json();
    dispatch({ type: "INSERT_SUCCESS", payload: data });
  };
};

export default Fetchdata;
