import Head from 'next/head';
import { Main } from '../../styles/homeStyle';
import Game from '../components/Game/Game';
import { useSocket } from '../hooks/useSocket';
import Chat from '../components/Chat/Chat';
import { useEffect } from 'react';
import Router from 'next/router';

export default function Play() {

  const socket = useSocket('http://localhost:3001');

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("@User") || '{}');
    if(!data.token){
      Router.push('/');
    }
  }, [])

  return (
    <>
      <Head>
        <title>Play</title>
      </Head>
      <Main>
        <Game socket={socket} />
        <Chat socket={socket} />
      </Main>
    </>
  )
}