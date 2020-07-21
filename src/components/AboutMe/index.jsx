import React from 'react'
import { FaCaretRight } from 'react-icons/fa'
import { StylesAbout, Description, Slide } from './styles'

import illustration from '../../assets/images/illustration2.svg';


const AboutMe = () => {
  return (
		<StylesAbout aria-label="About me">
			
      <Description aria-label="general description of me">
				<h2>About me</h2>
				
        <p>
					I was born in the city of Guadalajara and I live in Mexico City
					<span role='img' aria-label='México Flag'>
						🇲🇽
					</span>
					. I am 28 years old and
					<b> I like to build pages with a great user experience.</b>
				</p>
				
        <p>
					Since I was a child, I was excited by the idea of being able to build
					things that help people solve their problems
					<span role='img' aria-label='design emoji'>
						🎨
					</span>
					. I started learning to give technical support to people and some
					companies, although little about the graph and although it is
					incredible, I always miss something and found it in the creation of
					web pages.
				</p>
				
        <p>
					I keep learning every day with the dream of being able to develop
					incredible applications that help millions of people
					<span role='img' aria-label='design emoji'>
						😃
					</span>
				</p>
				
        <button tabIndex="1" name="more about of me " type="button" >
					<FaCaretRight role="none"/>
					more about me
				</button>
			</Description>
			
      <Slide role="figure" aria-label="Decorative Illustration">
				<img src={illustration} alt='Illustration about building a web page' />
			</Slide>
		</StylesAbout>
	);
}

export default AboutMe
