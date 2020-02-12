import axios from 'axios';

async function getData() {
  const response = await axios.get('http://localhost:5000/livedata');
  return response.data;
}

export default getData;
