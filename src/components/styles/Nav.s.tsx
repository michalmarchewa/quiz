import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  box-shadow: 0 8px 6px -6px lightblue;
`;

export const NavElement = styled.div`
  margin: 10px 15px;
  padding: 15px;
  color: black;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    font-weight: bold;
  }
`;
