import axios from 'axios';
import qs from 'query-string';

async function getData() {
  const response = await axios.post('https://redcap.vanderbilt.edu/api/',
    qs.stringify({
      token: 'A4FD20E1552AD49113B0998FA226EF9E', // gave the values directly for testing
      content: 'record',
      format: 'json',
      fields: 'gender,fake_data_flag,age',
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  return response.data;
}

export default getData;

