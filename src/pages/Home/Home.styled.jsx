import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled(NavLink)`
color: #161B22;
text-decoration: none;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 1000ms;
  transition-timing-function: linear;
  &:hover {

  transform: scale(1.1);
}
`
 

 