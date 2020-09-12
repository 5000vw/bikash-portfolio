import React from 'react'

import './style.scss'

type ExperienceCardPropType = {
	logo?: string
	title: string
	detail: string
	progress: string
}

const ExperienceCard: React.FC<ExperienceCardPropType> = ({
	logo,
	title,
	detail,
	progress,
}) => {
	return (
		<div className='experience-card'>
			<div className='experience-card__container'>
				<div className='experience-card__logo'>
					<img src={logo} alt={detail} />
				</div>
				<p className='experience-card__title'>{title}</p>
				<p>{detail}</p>
				<p className='experience-card__progress'>
					{progress}
				</p>
			</div>
		</div>
	)
}

export default ExperienceCard