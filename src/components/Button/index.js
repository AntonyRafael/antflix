import styled from 'styled-components';

const Button = styled.button`
  
  font-size: 24px;
  text-decoration: none;
   margin-bottom:15px;
   transition: .5s;
   padding: 12px 24px;
   color:white;
   font-weight: normal;
   border-radius: 7px;
   background-color:  #00a8e0;
   border: 3px solid ;
   border-color: #00a8e0;
   cursor: pointer;

   &:hover {
    color: #000;
   }
`;

export default Button;
