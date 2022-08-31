import type { NextPage } from 'next'
import Head from 'next/head';
import Login from '../components/Login/Login';
import { useEffect } from 'react';
import Router from 'next/router';

const Home: NextPage = () => {

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("@User") || '{}');
    if (data.token) {
      Router.push('/play');
    }
  }, [])

  return (
    <>
      <Head>
        <title>Game</title>
      </Head>
      <Login/>
    </>
  )
}

export default Home;