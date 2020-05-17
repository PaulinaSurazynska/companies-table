import axios from 'axios';

const getData = async (api, setData, setError = null) => {
  try {
    setError(false);
    const { data } = await axios.get(api);
    setData(data);
  } catch (err) {
    setError(true);
  }
};

export default getData;
