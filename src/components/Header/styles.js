import styled from 'styled-components';
import { flex, flexBetween } from '../../assets/styles/mixins';

export const StylesHeader = styled.div`
  ${flexBetween}
  margin: .75rem auto;
  max-width:1160px;

  button{
    display:none;
    border:none;
  }

  @media(max-width:425px){
    button{
      display:initial;
    }
  }
`;

export const Logo = styled.div`
  h1{
    ${flex};
    flex-direction:column;
    margin-bottom:-8px;
    font-size:1rem;
  }
  small{
    margin-top:0;
    font-size:.5rem;
  }
`;