import axios from 'axios';

export default axios.create({
  baseUrl: 'https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?api_key=key2CwkHb0CKumjuM&filterByFormula=(AND({Email}="contato@newtab.academy",{Senha}="123456",{Squad}="1"))'
});