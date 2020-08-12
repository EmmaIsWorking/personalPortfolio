import React from 'react';
import { StylesMain, Slide, Description, SocialMedia } from './styles';

import {
	FaFacebookSquare,
	FaTwitter,
	FaLinkedin,
	FaGithub,
	FaGitlab,
	FaBehanceSquare,
} from 'react-icons/fa';

import illustration from '../../assets/images/illustration1.svg';

const Main = () => {
	return (
		<StylesMain>
			<Slide>
				<img src={illustration} alt='' />
			</Slide>
			<Description aria-label='description'>
				<h1>
					Hello World
					<br />
				</h1>
				<h3>I´m Emmanuel</h3>
				<small>
					I'm a front end developer & UI | UX
					<span role='img' aria-label='deploy emoji'>
						🚀
					</span>
				</small>

				<SocialMedia role='figure'>
					<p>Follow Me:</p>

					<a
						href='https://github.com/EmmaIsWorking'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaGithub />
					</a>

					<a
						href='https://gitlab.com/EmmaIsWorking'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaGitlab />
					</a>

					<a
						href='https://www.linkedin.com/in/emmaisworking/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaLinkedin />
					</a>

					<a
						href='https://www.behance.net/EmmaIsWorking'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaBehanceSquare />
					</a>

					<a
						href='https://twitter.com/emmaisworking'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaTwitter />
					</a>

					<a
						href='https://www.facebook.com/EmmaIsWorking/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaFacebookSquare />
					</a>
				</SocialMedia>
			</Description>
		</StylesMain>
	);
};

export default Main;
