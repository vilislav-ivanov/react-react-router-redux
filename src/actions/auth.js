import { SET_AUTH_USER, SET_AUTH_LOADING } from './types';

export const setAuthUser = () => (dispatch) => {
  const user = {
    id: '35l3456k543l632sdf3j67sd234',
  };

  dispatch({ type: SET_AUTH_LOADING });

  setTimeout(() => {
    dispatch({
      type: SET_AUTH_USER,
      payload: user,
    });
  }, 1000);
};
