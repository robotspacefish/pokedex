import styled from 'styled-components';
import './Searchbar.scss';

export const Input = styled.input`
  background-color: white;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 250px;
`;

export const SubmitButton = styled.button`
  background-color: orange;
  color: white;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
`;