import React from 'react'

import HeroImage from '../../../../assets/images/hero-image.png'
import HeaderBg from '../../../../assets/images/header__bg.png'
import Button from '../../../common/Button'

import './style.scss'

export const Banner = () => {
	return (
		<div className='banner'>
			<div className='banner__container'>
				<div className='banner__content'>
					<h3>HELLO, I’M isaac kiplangat</h3>
					<h1>Full Stack Developer</h1>
					<h5>
						I’m a fullstack web developer based in kenya{' '}
						<span className='text-highlight'>
							front-end
						</span>
						. I am intrested in blockchaim, and i have a few projects
						,
						<span className='text-highlight'>
							product designer
						</span>
						, and digital marketer. Additionally, I am
						familiar with startup ecosystems. I commit code
						to{' '}
						<a
							className='github'
							href='https://github.com/5000vw'
							target='_blank'
							rel='noopener noreferrer'>
							Github.
						</a>
					</h5>
					<a href='#recent-projects'>
						<Button
							label='View projects'
							variant='outline'
						/>
					</a>
				</div>
				<div className='banner__image'>
					<img
						src={HeroImage}
						alt='Bikash Sharma smiling'
					/>
				</div>
			</div>
			<img
				src={HeaderBg}
				alt='code abstract background'
				className='banner__bg'
			/>
		</div>
	)
}
export default Banner
