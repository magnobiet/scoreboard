import styled from 'styled-components';

export const Wrapper = styled.main``;

export const Heading = styled.h1`
  position: absolute;
  width: 100%;
  background: #fff;
  text-align: center;
  padding: 1rem;
  text-transform: uppercase;
  font-size: 3rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  color: #06092b;
`;

export const Score = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`;

export const Reset = styled.button`
  border: none;
  padding: 1rem;
  font-size: 1.5rem;
  background: #000;
  color: #fff;
  position: fixed;
  top: 1rem;
  left: 1rem;
  cursor: pointer;
`;
