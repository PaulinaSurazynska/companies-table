/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const getCompanies = async (api, setData, setError = null) => {
  try {
    setError(false);
    const { data } = await axios.get(api);
    setData(data);
  } catch (err) {
    setError(true);
  }
};

export { getCompanies };
