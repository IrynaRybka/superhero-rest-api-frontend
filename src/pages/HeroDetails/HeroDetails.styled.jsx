import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 15px;
  border-radius: 4px;
  border: 2px orange solid;
  text-decoration: none;
  color: #362115;
  min-width: 110px;

  :not(last-child) {
    margin-right: 10px;
  }

  &.active {
    background-color: orange;
    color: white;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orange;
  }
`;
export const Avatar = styled.img`
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`
