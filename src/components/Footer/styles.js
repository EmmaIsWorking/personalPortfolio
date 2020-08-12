import styled from 'styled-components';
import { flex } from '../../assets/styles/mixins';

export const StylesFooter = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: auto;
	/* max-width:100vw; */
	background: ${({ theme }) => theme.black};
`;

export const Container = styled.div`
	max-width: 1160px;
	${flex};
	justify-content: space-between;
	align-items: center;
	margin: auto;
	width: 100%;
	max-width: 1160px;

	@media (max-width: 425px) {
		flex-direction: column;
	}
`;
export const Profile = styled.div`
	${flex};
	margin: 0.625rem;
	img {
		width: 3.563rem;
		border-radius: 50%;
		margin-right: 8px;
	}
	h3,
	small {
		font-size: 0.75rem;
		color: ${({ theme }) => theme.lightGray};
		& a {
			color: ${({ theme }) => theme.lightGray};
		}
	}
	@media (max-width: 425px) {
		flex-direction: column;
		order: 3;
		margin: 20px 0;

		& h3 {
			margin-top: 1rem;
			font-size: 1rem;
			text-align: center;
		}
		& small {
			font-size: 0.875rem;
		}
	}
`;

export const Nav = styled.ul`
	margin: 0.625rem;
	display: grid;
	grid-template-columns: 1fr 1fr;

	& li a {
		color: ${({ theme }) => theme.lightGray};
		font-size: 0.875rem;
		text-transform: uppercase;
		margin: 1rem;
	}

	@media (max-width: 425px) {
		grid-template-columns: 1fr;
		order: 2;
		margin: 20px 0;

		& > li {
			text-align: center;
			margin: 1rem;
		}
	}
`;
export const SocialMedia = styled.div`
	margin: 0.625rem;
	* {
		color: ${({ theme }) => theme.lightGray};
	}

	& svg {
		margin: 2px;
	}

	@media (max-width: 425px) {
		order: 3;
		margin: 20px 0;

		& p {
			display: none;
		}

		& svg {
			font-size: 1.5rem;
			margin: 14px;
		}
	}
`;
