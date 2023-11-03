import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    margin-left: 50px;
`

export const Links = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: red;
  }
`;

export const Header = styled.header`
  margin-top: 40px;
`

export const Footer = styled.footer`
    position: absolute;
    bottom: 0;
`