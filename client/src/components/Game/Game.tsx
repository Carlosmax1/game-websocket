import { Container, Player } from "./GameStyle";
import { Socket } from 'socket.io-client';
import { useEffect, useState } from 'react';
import React from "react";

interface PlayerProps {
  id: string;
  x: number;
  y: number;
}
type SocketProps = {
  socket: Socket | undefined;
}

export default function Game({socket}: SocketProps) {

  const [player, setPlayer] = useState<PlayerProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [move, setMove] = useState({x: 0, y: 0});

  function handleEvent(event: KeyboardEventInit) {
    const key = event.key;
    let move;
    switch (key) {
      case 'ArrowUp':
        move = { x: 0, y: -10 };
      break;
      case 'ArrowDown':
        move = { x: 0, y: 10 };
      break;
      case 'ArrowLeft':
        move = { x: -10, y: 0 };
      break;
      case 'ArrowRight':
        move = { x: 10, y: 0 };
      break;
      default:
      break;
    }
    if(move){
      setMove(move);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleEvent);
    return () => {
      window.removeEventListener('keydown', handleEvent);
    };
  }, [])

  useEffect(() => {
    socket?.on("connect", () => {
      console.log(`Usuario connectado : ${socket.id}`);
    })
    socket?.emit("USER_MOVE", move);
    socket?.on("USER_MOVE_UPDATE", (users) => {
      setPlayer(JSON.parse(users));
    });
    setTimeout(() => setLoading(false), 1000);
  }, [socket, move]);

  return (
    <>
      <Container>
        {loading ? <span>Carrengado</span> :
          <>
            {player.map(player => (
              <Player key={player.id} x={player.x} y={player.y}>
                {player.id}
              </Player>
            ))}
          </>
        }
      </Container>
    </>
  )
}