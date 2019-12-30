import { REQUEST, SUCCESS, FAIL, TEST } from '@root/constants/actions';

export const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${REQUEST}_${TEST}`:
      return { ...initialState, loading: true };

    case `${SUCCESS}_${TEST}`:
      return { ...state, loading: false, data: action.data };

    case `${FAIL}_${TEST}`:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};
