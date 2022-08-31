import styled from "styled-components";

interface PlayerProps {
  x: number;
  y: number;
}

export const Container = styled.section`
  width: 70vw;
  height: 90vh;
  border: 1px solid #d9d9d93a;
  position: relative;
  margin-left: 1em;
  margin-top: 1em;
  border-radius: 5px;
`

export const Player = styled.div<PlayerProps>`
  position: absolute;
  width: 80px;
  height: 80px;
  background: url("/assets/player.png");
  background-repeat: no-repeat;
  background-size: contain;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  font-weight: 400;
  color: #d9d9d9;
  font-size: 9pt;
`