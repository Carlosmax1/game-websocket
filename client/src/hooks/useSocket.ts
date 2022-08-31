import { useState, useEffect } from "react";
import { io, Socket } from 'socket.io-client';

function useSocket(url: string) {

  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const socketIO = io(url);
    setSocket(socketIO);
    function cleanup() {
      socketIO.disconnect();
    }
    return cleanup
  }, [])
  return socket;
}

export { useSocket }