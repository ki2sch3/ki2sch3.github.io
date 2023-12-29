const socials = [
	{
		title: 'gmail',
		link: 'mailto:mollydcxxiii@gmail.com',
	},
	{
		title: 'linkedin',
		href: 'https://www.linkedin.com/in/kir4che/',
	},
	{
		title: 'github',
		href: 'https://github.com/kir4che',
	},
	{
		title: 'instagram',
		href: 'https://www.instagram.com/kir4che/',
	},
]

const SocialBtn = () =>
	socials.map((social) => (
		<a href={social.link} target='_blank' className={`${social.title}__icon`}>
			<img src={`../assets/icons/${social.title}.png`} alt={social.title} />
		</a>
	))

export default SocialBtn
