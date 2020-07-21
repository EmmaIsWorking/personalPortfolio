import React from 'react'
import Home from '../pages/Home'

import {Router} from '@reach/router'

import GlobalStyles from '../assets/styles/GlobalStyles'
import { variables } from '../assets/styles/variables'
import { ThemeProvider } from 'styled-components'

const App = ()=>{
  return (
		<ThemeProvider theme={variables}>
			<GlobalStyles />
      <Router>
			  <Home path="/"/>
      </Router>
		</ThemeProvider>
	);
}

export default App;