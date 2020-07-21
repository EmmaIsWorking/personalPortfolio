import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle` 
*{
  box-sizing:border-box;
  margin:0;
  padding:0;
  color: ${({ theme }) => theme.black};
}

html{
  font-size:100%;
}

body{
  background: ${({ theme }) => theme.lightGray};
  margin:auto 15px;
  width:100%;
  max-width:1160px;
  font-size:1.125rem;
  margin: 0 auto;
  padding:1rem;

  @media(max-width:425px){
    margin:auto 5px;
    font-size:.0.829rem;
  }
  @media(max-width:768px){
    margin:auto 10px;
    font-size:.0.875rem;
  }
}

h1,h2,h3,h4,h5,h6,p,div,a, small{
  color: ${({ theme }) => theme.black};
}

h1,h2,h3,h4,h5,h6{
  font-family:'Poppins', sans-serif;
}

p,div,a, small{
  font-family:'Karla', sans-serif;
}

a{
  text-decoration:none;
}

ul,li{
  list-style:none;
}
`;

export default GlobalStyles;