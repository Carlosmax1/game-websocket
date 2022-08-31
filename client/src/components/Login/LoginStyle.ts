import styled from "styled-components";

interface AvatarProps  {
  src: string | null;
}

export const Form = styled.form`
  width: 50vw;
  height: 50vh;
  background-color: #d9d9d911;
  display: block;
  margin: 0 auto;
  transform: translate(0, 40%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Avatar = styled.div<AvatarProps>`
  width: 120px;
  height: 120px;
  background: url(${props => props.src ? props.src : '/assets/avatar.png'});
  border-radius: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Input = styled.input`
  margin: 2em 0;
  padding: 0.6em;
  background: none;
  outline: none;
  border: 1px solid #111;
  border-radius: 6px;
  color: #d3d3d3;
  font-weight: 400;
`

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  background: #111;
  border: none;
  width: 25%;
  height: 32px;
  font-weight: 500;
  color: #d9d9d9;
  border-radius: 5px;
`