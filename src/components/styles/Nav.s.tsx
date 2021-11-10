import styled from 'styled-components';

export const NavBar = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  box-shadow: 0 8px 6px -6px lightblue;
`;

export const NavElement = styled.div`
  margin: 10px 15px;
  padding: 15px;
  
  &:hover {
    transform: scale(1.1);
  }
  a {
    color: black;
    text-decoration: none;
  }
`;
