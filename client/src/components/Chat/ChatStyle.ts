import styled from "styled-components";

export const Container = styled.section`
  width: 30vw;
  min-height: 90vh;
  border: 1px solid #d9d9d93a;
  border-radius: 5px;
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 1em;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`

export const Messages = styled.div`
  width: 100%;
  height: auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
`

export const Menssage = styled.li`
  list-style: none;
  color: #d3d3d3;
  font-weight: 300;
  font-size: 9pt;
  margin: 0.2em 0;
  border: 1px solid #d9d9d93a;
  border-radius: 6px;
  padding: 0.4em;
  width: initial;
`
export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3em;
  margin-top: 0.3em;
`

export const User = styled.span`
  color: #d9d9d9;
  font-weight: 200;
  font-size: 8pt;
  margin-top: 0.5em;
  margin-left: 0.9em;
`

export const Date = styled.span`
  color: #d9d9d977;
  font-weight: 200;
  font-size: 7pt;
  font-style: italic;
`

export const Form = styled.form`
  width: 100%;
  height: 8%;
  border-top: 1px solid #d9d9d93a;
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  width: 75%;
  border: none;
  background: none;
  outline: none;
  padding: 0.7em;
  color: #d9d9d9;
  font-weight: 400;
`

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  background: none;
  border: 1px solid #d9d9d93a;
  width: 25%;
  height: 32px;
  margin-right: 0.5em;
  font-weight: 500;
  color: #d3d3d3;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`

