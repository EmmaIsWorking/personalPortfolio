import styled from 'styled-components';
import { flex } from '../../assets/styles/mixins'

export const StylesFooter = styled.footer`

height: 15rem;
/* max-width:100vw; */
background: ${({ theme }) => theme.black};
`;

export const Container = styled.div`
  max-width:1160px;
  ${flex};
  justify-content:space-between;
  margin: 0 auto;

`;
export const Profile = styled.div`
  ${flex}; 
  img{
    width:3.563rem;
    border-radius:50%;
    margin-right:8px;
  }
  h3, small{
    font-size: .75rem;
    color: ${({ theme }) => theme.lightGray};
  }
`;

export const Nav = styled.ul`
  & li a{
    color: ${({ theme }) => theme.lightGray};
    font-size: .875rem;
    text-transform: uppercase;
  }
`;
export const SocialMedia = styled.div`
  *{
    color: ${({ theme }) => theme.lightGray};
  }

  & svg{
    margin:2px;
  }
`;