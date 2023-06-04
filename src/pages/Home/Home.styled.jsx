import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled(NavLink)`
color: #161B22;
text-decoration: none;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);

  transform: scale(1);
  transition-property: transform;
  transition-duration: 1000ms;
  transition-timing-function: linear;
  &:hover {

  transform: scale(1.05);
}
`
 

 