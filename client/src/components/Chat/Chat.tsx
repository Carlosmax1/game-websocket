import { Container, Messages, Form, Input, Button, Menssage, Date as DateMsg, User, UserContainer } from './ChatStyle';
import { Socket } from 'socket.io-client';
import { AiOutlineSend } from "react-icons/ai";
import { FormEvent, useEffect, useState } from 'react';
import Avatar from '../Avatar/Avatar';

interface MenssageProps {
  id: string | undefined;
  msg: string;
  date: string;
}

type DataProps = {
  token: string;
  name: string;
  url: string;
}

type SocketProps = {
  socket: Socket | undefined;
}

export default function Chat({ socket }: SocketProps) {

  const [msg, setMsg] = useState<MenssageProps[]>([]);
  const [text, setText] = useState('');
  const [newMsg, setNewMsg] = useState<MenssageProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DataProps>();

  function getDate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hrs = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const sec = String(date.getSeconds()).padStart(2, '0');
    return `${day}` + '/' + `${month}` + '/' + `${year} ${hrs}:${min}:${sec}`;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const msg: MenssageProps = { id: socket?.id, msg: text, date: getDate() }
    setNewMsg(msg);
    setText('');
  }

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("@User") || '{}');
    if (data){
      setData(data);
    }
  }, [])

  useEffect(() => {
    socket?.on('connect', () => { });
    socket?.emit("USER_MSG", newMsg);
    socket?.on("USER_MSGS_UPDATE", (msg) => {
      setMsg(JSON.parse(msg));
    })
    setTimeout(() => setLoading(false), 1000);
  }, [socket, newMsg]);

  return (
    <>
      <Container>
        <Messages>
          {loading ?
            <span>Loading</span>
            :
            <>
              {msg.map(msg => (
                <>
                  <UserContainer>
                    <Avatar width='25' height='25' src={data?.url} />
                    <User>{data?.name}</User>
                  </UserContainer>
                  <Menssage key={msg.id}>{msg.msg}</Menssage>
                  <DateMsg>{msg.date}</DateMsg>
                </>
              ))}
            </>
          }
        </Messages>
        <Form onSubmit={handleSubmit}>
          <Input value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder='Envie uma mensagem'
            type='text'
          />
          <Button type='submit'><AiOutlineSend style={{ marginRight: '0.4em', fontSize: '12pt' }} /> Enviar</Button>
        </Form>
      </Container>
    </>
  )
}