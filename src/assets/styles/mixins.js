import { css } from 'styled-components'

export const flex = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const flexBetween = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const mixinFlexColumnMobil = css`
@media(max-width:425px){
    flex-direction:column;
    justify-content:center;
    margin-bottom: ${({ theme }) => theme.spacingSectionMobil};
  }
`

//Subtitles
export const mixinSubtitleMobil = css`
	h2{
      text-align:center;
      margin: 0 auto 35px;

    }
` 

//* Buttons
export const btnLarge = css`
	margin:2rem auto;
	width: 90%;
	height: 3.125rem;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px -8px 0px rgba(57, 57, 57, 0.38);
	border:none;
	border-radius:8px;
	font-family:'Poppins', sans-serif;
	font-size: 1rem;
	background: ${({ theme }) => theme.purple};
	color: ${({ theme }) => theme.lightGray};

	&:hover{
		background: ${({ theme }) => theme.purpleBlue};
	}

`;