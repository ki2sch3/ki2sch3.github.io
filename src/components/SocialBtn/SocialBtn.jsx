const socials = [
	{
		title: 'gmail',
		link: 'mailto:mollydcxxiii@gmail.com'
	},
	{
		title: 'linkedin',
		link: 'https://www.linkedin.com/in/mollysu'
	},
	{
		title: 'github',
		link: 'https://github.com/kir4che'
	},
	{
		title: 'instagram',
		link: 'https://www.instagram.com/kir4che'
	}
]

const SocialBtn = () =>
	socials.map(social => (
		<a href={social.link} target='_blank' className={`${social.title}__icon`}>
			<img src={`assets/icons/${social.title}.png`} alt={social.title} />
		</a>
	))

export default SocialBtn
