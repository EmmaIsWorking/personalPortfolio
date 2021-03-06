import styled from 'styled-components';
import {
	flex,
	mixinFlexColumnMobil,
	mixinSubtitleMobil,
	btnLarge,
} from '../../assets/styles/mixins';

//* StylesAbout
export const StylesAbout = styled.section`
	${flex}
	max-width:1160px;
	margin: 0 auto;
	${mixinFlexColumnMobil}
	margin-bottom: ${({ theme }) => theme.spacingSectionDesktop};
	margin-top: ${({ theme }) => theme.spacingSectionDesktop};
`;

//* Description
export const Description = styled.article`
	width: 40%;
	margin: 0.625rem;
	p {
		font-size: 1.125rem;
		margin-bottom: 2rem;

		@media (max-width: 425px) {
			text-align: center;
		}
	}

	button {
		${flex};
		${btnLarge};
	}

	@media (max-width: 425px) {
		width: 95%;
		align-items: center;
		${mixinSubtitleMobil}
	}

	@media (max-width: 768px) {
		& img {
			max-width: 470px;
		}
	}
`;

//*Slide
export const Slide = styled.figure`
	width: 60%;
	margin: 10px;
	box-sizing: border-box;

	& img {
		width: 100%;
	}

	@media (max-width: 425px) {
		width: 100%;
	}
	@media (max-width: 768px) {
		& img {
			margin-top: 0;
			margin-bottom: 40%;
		}
	}
`;
