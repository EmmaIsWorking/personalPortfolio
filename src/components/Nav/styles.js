import styled from 'styled-components';
import { flex } from '../../assets/styles/mixins';

export const StylesNav = styled.ul`
	text-transform: uppercase;
	${flex}
	justify-content: flex-end;
	margin: 0.625rem;
	font-weight: bold;
	li {
		margin: 8px;
	}

	a {
		margin: 10%;
		font-size: 1rem;
		letter-spacing: 10%;
	}

	@media (max-width: 425px) {
		display: none;
	}
`;
