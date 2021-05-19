import React from 'react';
import { useState } from 'react';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';

import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido!');
    }

    if (password.length <= 6 || password.length >= 20) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 20 caracteres!');
      console.log(formErrors);
    }
  }
  
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="email">
          <input 
            type="email" 
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

        <button type="submit">ACESSAR</button>
      </form>
    </div>
  );
}
