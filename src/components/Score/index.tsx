import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export enum Side {
  Home = '#30b2ee',
  Guest = '#ff4d4b',
}

export type ScoreProps = {
  side: Side;
  score: number;
  onScore?: () => void;
  as?: React.ElementType;
} & (
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
);

const Score = ({
  side = Side.Home,
  score = 0,
  onScore,
  ...props
}: ScoreProps) => (
  <S.Wrapper type="button" side={side} onClick={onScore} {...props}>
    {score}
  </S.Wrapper>
);

export default Score;
