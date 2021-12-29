import { rgba } from 'polished';
import styled, { css } from 'styled-components';
import { ScoreProps } from '.';

export const Wrapper = styled.button<Pick<ScoreProps, 'side'>>`
  ${({ side }) => css`
    background-color: ${side};
    font-weight: bold;
    padding: 1rem;
    text-align: center;
    font-size: 10rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: ${rgba(side, 0.95)};
    }
  `}
`;
