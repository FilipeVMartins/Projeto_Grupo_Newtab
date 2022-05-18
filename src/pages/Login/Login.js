import React from 'react';
import { useState } from 'react';
import {Redirect} from 'react-router-dom';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import NavMenu from '../../components/Menu/NavMenu';

import './Login.css';
//import axios from '../../services/axios';
// import axios from 'axios';

export default function Login() {  
  //const [data, setData] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectSearchListing, setRedirectSearchListing] = useState(false);
  
  // async function getData() {
  //   const response = await axios.get('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?api_key=key2CwkHb0CKumjuM&filterByFormula=(AND({Email}="contato@newtab.academy",{Senha}="123456",{Squad}="1"))');
  //   const {data} = response;
  //   setData(response);
  // }

  React.useEffect(() => {

    //getData();

    if(localStorage.getItem('logged') === 'true'){
      setRedirectSearchListing(true)
    }
  }, []);

  // validando o form no front 
  const handleSubmit = e => {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido !');
    } 

    if (password.length <= 5) {
      formErrors = true;
      toast.error('A senha deve ter 6 caracteres !');
      // console.log(formErrors);
    }

    if(!formErrors){
      getLoginData();
    }
  };

  let getLoginData = () => {
    fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?maxRecords=1&view=Grid%20view&api_key=key2CwkHb0CKumjuM&filterByFormula=(%7BSquad%7D+%3D+1)", {
    })
    .then(response => response.json())
    .then(responseJson => {

        if(responseJson.records[0].fields.Email === email && responseJson.records[0].fields.Senha === password){
          setRedirectSearchListing(true)
          localStorage.setItem('logged', 'true');
          toast.success('Login bem sucedido!');
        } else {
          setRedirectSearchListing(false);
          toast.error('Usuário e senha não encontrados!');
        }
    })
  }
  // contato@newtab.academy
  // 123456  
  return (
    <div className="fundo-page">
      { redirectSearchListing === true ? <Redirect to="/SearchListing" /> : '' }

      <div className="login-nav">
        <NavMenu headerHeightMobile={32.5} headerHeightDesktop={49.25}/>
      </div>
      
      <div className="loginpage-container">        
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>

          <label htmlFor="email">
            <input 
              type="text" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Usuário"
            />
          </label>

          <label htmlFor="senha">
            <input 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Senha"
            />
          </label>

          <button type="submit"><span>ACESSAR</span></button>
        </form>
      </div>

    </div>  
  );
}
