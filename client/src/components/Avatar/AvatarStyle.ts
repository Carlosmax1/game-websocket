import styled from "styled-components";

type AvatarProps = {
  width: string;
  height: string;
  src: string | undefined;
}

export const Avatar = styled.div<AvatarProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: url(${props=> props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;
  position: relative;
`

export const Online = styled.div`
  width: 7px;
  height: 7px;
  background-color: green;
  border-radius: 100%;
  position: absolute;
  bottom: -1%;
  right: -1%;
  animation: pop .4s ease-in-out infinite, brilhar .5s linear infinite;

  @keyframes pop {
  0% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

@keyframes brilhar {
  0% {
    filter: brightness(.95);
  }
  50% {
    filter: brightness(1);
  }
  100% {
    filter: brightness(.95);
  }
}
`

