const socials = [
	{
		title: 'gmail',
		link: 'mailto:mollydcxxiii@gmail.com'
	},
	{
		title: 'linkedin',
		link: 'https://www.linkedin.com/in/kir2ch3'
	},
	{
		title: 'github',
		link: 'https://github.com/kir2ch3'
	},
	{
		title: 'instagram',
		link: 'https://www.instagram.com/kir2ch3'
	}
]

const SocialBtn = () =>
	socials.map(social => (
		<a href={social.link} target='_blank' className={`${social.title}__icon`}>
			<img src={`assets/icons/${social.title}.png`} alt={social.title} />
		</a>
	))

export default SocialBtn
