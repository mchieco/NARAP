import axios from 'axios';

async function getData() {
  const response = await axios.get('http://localhost:5000/fetchdata');
  return response.data;
}

export default getData;
