import React from 'react'
import { Tooltip } from 'react-tooltip'
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Skill = () => {
	const mySkillList = {
		前端開發: [
			{
				name: 'HTML5',
				icon: 'https://img.icons8.com/color/100/html-5--v1.png',
				desc: '',
			},
			{
				name: 'CSS3',
				icon: 'https://img.icons8.com/color/100/css3.png',
				desc: '',
			},
			{
				name: 'JavaScript',
				icon: 'https://img.icons8.com/color/100/javascript--v1.png',
				desc: '熟悉 ES6+ 語法，並能使用 JavaScript 開發網頁。',
			},
			{
				name: 'React.js',
				icon: 'https://img.icons8.com/color/100/react-native.png',
				desc: '',
			},
			{
				name: 'Redux',
				icon: 'https://img.icons8.com/color/100/redux.png',
				desc: 'State management library for React applications.',
			},
			{
				name: 'Next.js',
				icon: 'https://img.icons8.com/color/100/nextjs.png',
				desc: 'React framework for building server-side rendered and static web applications.',
			},
			{
				name: 'TypeScript',
				icon: 'https://img.icons8.com/color/100/typescript.png',
				desc: 'A superset of JavaScript that adds static types.',
			},
			{
				name: 'Sass',
				icon: 'https://img.icons8.com/color/100/sass.png',
				desc: 'CSS preprocessor to enhance the capabilities of CSS.',
			},
			{
				name: 'Bootstrap',
				icon: 'https://img.icons8.com/color/100/bootstrap--v2.png',
				desc: 'CSS framework for building responsive and mobile-first websites.',
			},
			{
				name: 'Tailwind CSS',
				icon: 'https://img.icons8.com/color/100/tailwindcss.png',
				desc: 'Utility-first CSS framework for quickly building designs.',
			},
			{
				name: 'Material UI',
				icon: '../assets/icons/materialui.png',
				desc: "React UI framework implementing Google's Material Design.",
			},
		],
		後端開發: [
			{
				name: 'Node.js',
				icon: 'https://img.icons8.com/color/100/nodejs.png',
				desc: '',
			},
			{
				name: 'Express.js',
				icon: 'https://img.icons8.com/color/100/express-js.png',
				desc: '',
			},
			{
				name: 'Spring Boot',
				icon: 'https://img.icons8.com/color/100/spring-logo.png',
				desc: '',
			},
			{
				name: 'MySQL',
				icon: 'https://img.icons8.com/color/100/mysql-logo.png',
				desc: '',
			},
			{
				name: 'MongoDB',
				icon: 'https://img.icons8.com/color/100/mongodb.png',
				desc: '',
			},
			{
				name: 'Mongoose ODM',
				icon: 'https://img.icons8.com/color/100/mongoose.png',
				desc: '',
			},
		],
		程式語言: [
			{
				name: 'JavaScript',
				icon: 'https://img.icons8.com/color/100/javascript--v1.png',
				desc: '',
			},
			{
				name: 'TypeScript',
				icon: 'https://img.icons8.com/color/100/typescript.png',
				desc: '',
			},
			{
				name: 'Java',
				icon: 'https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png',
				desc: '',
			},
			{
				name: 'Python',
				icon: 'https://img.icons8.com/color/48/python--v1.png',
				desc: '',
			},
		],
		其他工具: [
			{
				name: 'GitHub',
				icon: 'https://img.icons8.com/fluency/100/github.png',
				desc: '',
			},
			{
				name: 'Git',
				icon: 'https://img.icons8.com/color/100/git.png',
				desc: '',
			},
			{
				name: 'Postman',
				icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png',
				desc: '',
			},
			{
				name: 'Figma',
				icon: 'https://img.icons8.com/color/100/figma--v1.png',
				desc: '',
			},
			{
				name: 'WordPress',
				icon: 'https://img.icons8.com/fluency/100/wordpress.png',
				desc: '',
			},
		],
	}

	return (
		<div id='skill' className='pt-16 space-y-6'>
			<h2 className='pb-1 mx-auto border-b-4 border-pink-500 w-fit'>專業技能</h2>
			<section className='p-4 bg-pink-300'>
				<Swiper
					cssMode={true}
					navigation={true}
					pagination={true}
					mousewheel={true}
					keyboard={true}
					loop={true}
					style={{
						'--swiper-navigation-color': '#FF7EA1',
						'--swiper-pagination-color': '#FF7EA1',
						'--swiper-navigation-size': '1.25rem',
					}}
					className='max-w-screen-md bg-white rounded-xl'
					modules={[Navigation, Pagination, Mousewheel, Keyboard]}
				>
					{['前端開發', '後端開發', '程式語言', '其他工具'].map((title, index) => {
						return (
							<SwiperSlide className='px-8 pt-3 pb-12' key={index}>
								<SwiperSlideContainer title={title}>
									{mySkillList[title].map((skill, index) => {
										return (
											<li className={`${skill.name.length > 10 ? 'w-26' : 'w-20'} space-y-1 text-center`} key={index}>
												<img
													data-tooltip-id={skill.name}
													width='60'
													height='60'
													src={skill.icon}
													className='mx-auto'
													alt={skill.name}
												/>
												<Tooltip
													id={skill.name}
													content={skill.desc}
													place='bottom'
													style={{
														backgroundColor: '#333333',
														color: '#fff',
													}}
												/>
												<p>{skill.name}</p>
											</li>
										)
									})}
								</SwiperSlideContainer>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</section>
		</div>
	)
}

const SwiperSlideContainer = ({ title, children }) => {
	return (
		<>
			<h3 className='px-4 mx-auto mb-5 text-white bg-pink-600 rounded-full w-fit'>{title}</h3>
			<ul className='flex flex-wrap justify-center gap-5'>{children}</ul>
		</>
	)
}

export default Skill
