import { useState } from 'react';
import Score, { Side } from '../Score';
import * as S from './styles';

const Main = () => {
  const [homeScore, setHomeScore] = useState(0);
  const [guestScore, setGuestScore] = useState(0);

  const setScore = (side: Side) => {
    return {
      [Side.Home]: () => setHomeScore(homeScore + 1),
      [Side.Guest]: () => setGuestScore(guestScore + 1),
    }[side]();
  };

  const resetScore = () => {
    if (confirm('Are you sure?')) {
      setHomeScore(0);
      setGuestScore(0);
    }
  };

  return (
    <S.Wrapper>
      <S.Heading>Scoreboard</S.Heading>

      <S.Score>
        <Score
          side={Side.Home}
          score={homeScore}
          onScore={() => setScore(Side.Home)}
        />

        <Score
          side={Side.Guest}
          score={guestScore}
          onScore={() => setScore(Side.Guest)}
        />
      </S.Score>

      <S.Reset type="button" onClick={resetScore}>
        Reset
      </S.Reset>
    </S.Wrapper>
  );
};

export default Main;
