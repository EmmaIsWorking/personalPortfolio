import styled from 'styled-components';
import { flex, mixinFlexColumnMobil } from '../../assets/styles/mixins';

//* StylesMain
export const StylesMain = styled.main`
	${flex};
	/* max-width:100%; */
	margin-bottom: ${({ theme }) => theme.spacingSectionDesktop};
	width: 100%;
	max-width: 1160px;
	margin: 0 auto;
	${mixinFlexColumnMobil};

	@media (max-width: 425px) {
		flex-direction: column-reverse;
	}
`;

//* Slide
export const Slide = styled.div`
	width: 40%;
	margin: 0.625rem;

	@media (max-width: 768px) {
		& img {
			max-width: 470px;
		}
	}

	@media (max-width: 425px) {
		order: 2;
		width: 95%;

		& img {
			max-width: 100%;
		}
	}
`;

//*Description
export const Description = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: 60%;
	margin: 0.625rem;

	h1 {
		font-size: ${({ theme }) => theme.title};
	}

	h3 {
		margin-bottom: 0.3rem;
		padding: 0.25rem 0.5rem;
		background: ${({ theme }) => theme.yellow};
		font-size: ${({ theme }) => theme.subtitle};
	}

	small {
		font-size: 1rem;
	}

	@media (max-width: 425px) {
		order: 1;
		width: 100%;
		align-items: center;

		h1 {
			font-size: ${({ theme }) => theme.titleMobil};
		}
		h3 {
			font-size: ${({ theme }) => theme.subtitleMobil};
		}
		small {
			font-size: 0.75rem;
		}
	}

	@media (max-width: 768px) {
		h1 {
			font-size: ${({ theme }) => theme.titleTablet};
		}

		h3 {
			font-size: ${({ theme }) => theme.subtitleTablet};
		}

		small {
			font-size: 0.938rem;
		}
	}
`;

//*SocialMedia
export const SocialMedia = styled.div`
	margin-top: 7.188rem;

	p {
		text-align: end;
	}

	svg {
		font-size: 20px;
		color: ${({ theme }) => theme.black};
		margin: 2px;
	}

	@media (max-width: 425px) {
		margin: 1rem auto;

		p {
			text-align: center;
			margin-bottom: 4px;
		}

		svg {
			margin: 4px;
		}
	}
`;
