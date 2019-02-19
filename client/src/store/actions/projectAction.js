import axios from "axios";
export const GET_PROJECT_SUCCESS = "GET_PROJECT_SUCCESS";
export const GET_ACTION_SUCCESS = "GET_ACTION_SUCCESS";
export const POST_PROJECT_SUCCESS = "POST_PROJECT_SUCCESS";
export const LOADING = "LOADING";
export const GET_ERRORS = "GET_ERRORS";

const PROJECT = `http://localhost:5000/api/projects`;
const ACTIONSLIST = `http://localhost:5000/api/projects/actions/`;
export const getProjects = () => dispatch => {
  dispatch(setUserLoading());
  axios
    .get(PROJECT)
    .then(({ data }) =>
      dispatch({
        type: GET_PROJECT_SUCCESS,
        payload: data
      })
    )
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};
export const postProjects = data => dispatch => {
  dispatch(setUserLoading());
  axios
    .post(`${PROJECT}`, data)
    .then(({ data }) =>
      dispatch({
        type: POST_PROJECT_SUCCESS
      })
    )
    .then(() => getProjects()(dispatch))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

export const getListAction = () => dispatch => {
  dispatch(setUserLoading());
  axios
    .get(`${ACTIONSLIST}1`)
    .then(({ data }) =>
      dispatch({
        type: GET_ACTION_SUCCESS,
        payload: data
      })
    )
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

const setUserLoading = () => {
  return {
    type: LOADING
  };
};
