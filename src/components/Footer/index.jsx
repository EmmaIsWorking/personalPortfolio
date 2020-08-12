import React from 'react';
import { StylesFooter, Container, Profile, Nav, SocialMedia } from './styles';

import {
	FaFacebookSquare,
	FaTwitter,
	FaLinkedin,
	FaGithub,
	FaGitlab,
	FaBehanceSquare,
} from 'react-icons/fa';

import profilePhoto from '../../assets/images/profilePhoto.jpeg';

const Footer = () => {
	return (
		<StylesFooter>
			<Container>
				<Profile>
					<img src={profilePhoto} alt='I´m Emmanuel García' />
					<div>
						<h3>Emmanuel Garcia</h3>
						<small>
							Made with love
							<span role='img' aria-label='love emoji'>
								❤️
							</span>
							<a
								href='https://twitter.com/EmmaIsWorking'
								target='_blank'
								rel='noopener noreferrer'
							>
								for @emmaIsWorking
							</a>
						</small>
					</div>
				</Profile>

				<Nav>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/'>Porfolio</a>
					</li>
					<li>
						<a href='/'>Experience</a>
					</li>
					<li>
						<a href='/'>Contact</a>
					</li>
				</Nav>

				<SocialMedia role='figure'>
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
			</Container>
		</StylesFooter>
	);
};

export default Footer;
