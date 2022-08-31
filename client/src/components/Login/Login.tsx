import { Form, Avatar, Input, Button } from './LoginStyle';
import { useState, useEffect, FormEvent } from 'react';
import { v4 as uuid } from 'uuid';
import Router from 'next/router';

export default function Login() {

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (name) {
      const data = {
        token: uuid(),
        name: name,
        url: url
      }
      sessionStorage.setItem("@User", JSON.stringify(data));
      Router.push('/play');
    }
  }

  useEffect(() => {
    setUrl(`https://github.com/${name.trim()}.png`)
  }, [name])

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Avatar src={name ? url : null} />
        <Input type='text' placeholder='Nome do github' onChange={event => setName(event.target.value)} />
        <Button value={name} type='submit'>Entrar</Button>
      </Form>
    </>
  )
}