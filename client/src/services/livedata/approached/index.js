import axios from 'axios';

async function getDataApproached() {
  const response = await axios.get('http://localhost:8080/livedata');
  return response.data;
}

export default getDataApproached;
