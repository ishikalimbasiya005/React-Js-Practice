const mystore = {
  loading: false,
  data: [],
  error: null,
};

function reducer(state = mystore, action) {
  switch (action.type) {
    case "Fetch_Start":
      return {
        ...state,
        loading: true,
      };
      break;

    case "Insert_Success":
      return {
        ...state,
        loading: false,
      };
      break;

    case "Fetch_Success":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
      break;

    case "Fetch_Fail":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      break;

    default:
      return state;
      break;

    case "Insert_Success":
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload], 
      };
  }
}

export default reducer;
