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
					<h3>HELLO, I’M ISAAC KIPLANGAT</h3>
					<h1>Full Stack Developer</h1>
					<h5>
						I’m a fullstack web developer based in kenya{' '}
						<span className='text-highlight'>
							.
						</span>
						. I  am also am intrested in blockchain developments, and i have a few projects
						,
						<span className='text-highlight'>
							 as a product designer
						</span>
						,javacard and product design. Additionally, I am
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
					<a href='#resume'>
						<Button
							label='see my Resume'
							variant='outline'
						/>
					<a/>
				</div>
				<div className='banner__image'>
					<img
						src={#}
						alt='isaac kiplangat'
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
