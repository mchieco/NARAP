import axios from 'axios';

async function getData() {
  const response = await axios.get('https://thenarap.herokuapp.com/fetchdata');
  return response.data;
}

export default getData;
