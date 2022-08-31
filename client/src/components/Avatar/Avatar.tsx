import { Avatar as AvatarS, Online } from './AvatarStyle';

type AvatarProps = {
  width: string;
  height: string;
  src: string | undefined;
}

export default function Avatar({width, height, src}: AvatarProps) {
  return (
    <>
      <AvatarS height={height} width={width} src={src}>
        <Online />
      </AvatarS>
    </>
  )
}