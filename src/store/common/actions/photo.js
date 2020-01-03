import { SAVE, PHOTO } from '@root/constants/actions';

export const savePhoto = photoSrc => ({
  type: `${SAVE}_${PHOTO}`,
  photoSrc,
});
