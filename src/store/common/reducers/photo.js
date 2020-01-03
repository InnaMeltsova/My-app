import { SAVE, PHOTO } from '@root/constants/actions';

export const initialState = {
  photoSrc: '',
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${SAVE}_${PHOTO}`:
      return { ...state, photoSrc: action.photoSrc };

    default:
      return state;
  }
};
