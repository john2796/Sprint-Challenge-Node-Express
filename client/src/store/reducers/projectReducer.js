import {
  LOADING,
  GET_PROJECT_SUCCESS,
  GET_ACTION_SUCCESS,
  POST_PROJECT_SUCCESS
} from "../actions/projectAction";

const initialState = {
  projects: [],
  action: [],
  loading: false
};
export default function reducerName(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PROJECT_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        loading: false
      };
    case POST_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case GET_ACTION_SUCCESS:
      return {
        ...state,
        action: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
