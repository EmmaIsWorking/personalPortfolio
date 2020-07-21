import React from 'react'
import {Link} from '@reach/router'

import { StylesNav} from './styles'
const Nav = () => {
  return (
		<StylesNav aria-label='Main Menu'>
			<li aria-label='Home'>
				<Link to=''>Home</Link>
			</li>
			<li aria-label='Portfolio'>
				<Link to='#Porfolio'>Portafolio</Link>
			</li>
			<li aria-label='Education'>
				<Link to='#Education'>Education</Link>
			</li>
			<li aria-label='Contact'>
				<Link to='#Contact'>Contact</Link>
			</li>
		</StylesNav>
	);
}

export default Nav
