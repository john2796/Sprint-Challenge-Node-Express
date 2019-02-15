import {
  LOADING,
  GET_PROJECT_SUCCESS,
  GET_ACTION_SUCCESS
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
        projects: action.payload
      };
    case POST_PROJECT_SUCCESS:
      return {
        ...state
      };
    case GET_ACTION_SUCCESS:
      return {
        ...state,
        action: action.payload
      };

    default:
      return state;
  }
}
