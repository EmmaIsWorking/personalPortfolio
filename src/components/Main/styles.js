import styled from 'styled-components';
import { flex, mixinFlexColumnMobil } from '../../assets/styles/mixins';

//* StylesMain
export const StylesMain = styled.main`
  ${flex};
  max-width:100%;
  margin-bottom: ${({ theme }) => theme.spacingSectionDesktop};

  ${mixinFlexColumnMobil};
`;

//* Slide
export const Slide = styled.div`
  width:40%;

  @media(max-width:768px){
    & img{
      max-width:470px;
    }
  }
  
  @media(max-width:425px){
    order:2;
    width:100%;

    & img{
      max-width:100%;
    }
  }
`;

//*Description
export const Description = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  width:60%;
  
  h1{
    font-size: ${({ theme }) => theme.title};
  }
  
  h3{
    margin-bottom:.3rem;
    padding: .25rem .5rem;
    background:${({ theme }) => theme.yellow};
    font-size:${({ theme }) => theme.subtitle};
  }

  small{
    font-size:1rem;
  }

@media(max-width:425px){
    order:1;
    width:100%;
    align-items:center;
    
    h1{
      font-size: ${({ theme }) => theme.titleMobil};
    }
    h3{
      font-size: ${({ theme }) => theme.subtitleMobil};
    }
    small{
      font-size: .75rem;
    }
  }

@media(max-width:768px){
  h1{
    font-size: ${({ theme }) => theme.titleTablet};
  }
  
  h3{
    font-size: ${({ theme }) => theme.subtitleTablet};
  }
  
  small{
    font-size: 0.938rem;
  }
}

`;



//*SocialMedia
export const SocialMedia = styled.div`
margin-top: 7.188rem;

p{
  text-align:end;
}

svg{
  font-size: 20px;
  color: ${({ theme }) => theme.black};
  margin: 2px;
}

@media(max-width:425px){
  margin: 4rem auto;
  
  p{
    text-align:center;
    margin-bottom:4px;
  }

  svg{
    margin:4px;
  }
}
`;