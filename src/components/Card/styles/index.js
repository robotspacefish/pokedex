import styled from 'styled-components/macro';

export const Container = styled.div`
  margin: 10px;
  width: 300px;
  height: 400px;
  border-radius: 20px;
  border: 3px solid ${({ color }) => color};
`;

export const Header = styled.header`
  display: flex;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 60px;
  overflow: hidden;
`;

export const Number = styled.div`
  background-color: ${({ color }) => color};
  color: white;
  min-width: 60px;
  font-size: 2em;
  padding: 10px;
  border-bottom-right-radius: 15px;
`;

export const Name = styled.h3`
  flex: 1;
  font-variant: small-caps;
  letter-spacing: 1px;
  margin-left: -30px;
`;

export const Image = styled.img`
  max-width: 200px;
  height: auto;
  margin: 5px;
`;

export const Info = styled.div`
`;

export const Types = styled.div`
  display: flex;
  border-top: 2px solid ${({ color }) => color};
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  .Card__stats-exp {
    border-bottom-left-radius: 15px;
  }

  .Card__stats-weight {
    border-bottom-right-radius: 15px;
  }
`;

export const Box = styled.div`
  border: 1px solid ${({ color }) => color};
  flex: 1;
  padding: 5px 0;
  cursor: default;
`;