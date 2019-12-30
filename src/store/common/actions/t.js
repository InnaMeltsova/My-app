import { REQUEST, TEST } from '@root/constants/actions';

export const t = dataId => ({
  type: `${REQUEST}_${TEST}`,
  dataId,
});
