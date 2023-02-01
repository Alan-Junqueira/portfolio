import React, { SyntheticEvent, useEffect, useState } from 'react';

import { Button } from '../Button';

import * as C from './styled';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const ReactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [emailError, setEmailError] = useState(false);

  const [data, setData] = useState<FormValues[]>([
    { firstName: '', lastName: '', email: '', message: '' }
  ]);

  const emailValidate = (email: string) => {
    const regexEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    const result = !regexEmail.test(email);
    console.log(result);
    return result;
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    let resultValidation = emailValidate(email);

    if (resultValidation) return alert('Preencha os dados');
    else {
      setData([{ firstName, lastName, email, message }]);

      alert(
        `Dados enviados: \n Nome: ${firstName} \n Sobrenome: ${lastName} \n Email: ${email} \n Mensagem: ${message}`
      );
      setFirstName('');
      setEmail('');
      setLastName('');
      setMessage('');
    }
  };

  return (
    <C.Container onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Digite seu nome"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="lastName">Sobrenome</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Digite seu sobrenome"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          placeholder="exemplo@email.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => emailValidate(e.target.value)}
        />
        {emailError && <C.Error>Digite um e-mail válido.</C.Error>}
      </div>
      <div>
        <label htmlFor="">Deixe uma mensagem</label>

        <textarea
          name="message"
          placeholder="Deixe uma mensagem"
          rows={8}
          cols={50}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button backgroundColor="#F23827" label="Enviar" color="#010B40" />
    </C.Container>
  );
};

export { ReactForm };
