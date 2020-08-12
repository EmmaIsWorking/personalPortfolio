import React from 'react';
import { MdMoreVert } from 'react-icons/md';

import { StylesHeader, Logo } from './styles';

import Nav from '../Nav';

const Header = () => {
	return (
		<StylesHeader>
			<Logo>
				<h1 title='My name'>Emmanuel García</h1>
				<small title='profession'>Frontend Developer | UI UX</small>
			</Logo>
			<Nav role='navigator' />
			<button>
				<MdMoreVert />
			</button>
		</StylesHeader>
	);
};

export default Header;
