import axios from 'axios';

import { BASE_URL, TEST } from '@root/constants/api';

export const testApi = async testData => {
  try {
    const res = await axios.post(`${BASE_URL}${TEST}`, testData);

    return res.data;
  } catch (err) {
    throw err;
  }
};
