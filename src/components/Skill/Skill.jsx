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
				desc: '熟悉基本語法 (ES6+),AJAX 串接第三方 API,運用 Apache ECharts 視覺化圖表庫',
			},
			{
				name: 'React.js',
				icon: 'https://img.icons8.com/color/100/react-native.png',
				desc: '熟悉使用 React.js 開發網站, React Router v6 管理路由',
			},
			{
				name: 'Redux',
				icon: 'https://img.icons8.com/color/100/redux.png',
				desc: '了解基本概念,略懂 RTK 基本使用方式',
			},
			{
				name: 'Next.js',
				icon: 'https://img.icons8.com/color/100/nextjs.png',
				desc: '可用 Next.js 開發網站,使用過 NextAuth 管理登入狀態、實作第三方登入',
			},
			{
				name: 'TypeScript',
				icon: 'https://img.icons8.com/color/100/typescript.png',
				desc: '了解基本語法,了解如何運用型別化名、介面',
			},
			{
				name: 'Sass',
				icon: 'https://img.icons8.com/color/100/sass.png',
				desc: '了解基本使用方式 (變數、巢狀、混入、繼承)',
			},
			{
				name: 'Bootstrap',
				icon: 'https://img.icons8.com/color/100/bootstrap--v2.png',
				desc: '略懂基本使用方式',
			},
			{
				name: 'Tailwind CSS',
				icon: 'https://img.icons8.com/color/100/tailwindcss.png',
				desc: '熟悉 Tailwind CSS,了解如何自訂樣式,切版 RWD 網站',
			},
			{
				name: 'Material UI',
				icon: 'assets/icons/materialui.png',
				desc: '',
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
				desc: '了解如何創建基本路由,搭配 Mongoose 連至 MongoDB 以建立模型',
			},
			// {
			// 	name: 'Spring Boot',
			// 	icon: 'https://img.icons8.com/color/100/spring-logo.png',
			// 	desc: '學習中',
			// },
			{
				name: 'MySQL',
				icon: 'https://img.icons8.com/color/100/mysql-logo.png',
				desc: '熟悉查詢語法',
			},
			{
				name: 'MongoDB',
				icon: 'https://img.icons8.com/color/100/mongodb.png',
				desc: '了解基本的查詢語法',
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
				desc: '熟悉​基本語法,具有簡易視窗程式的開發經驗 (Java Swing)',
			},
			{
				name: 'Python',
				icon: 'https://img.icons8.com/color/48/python--v1.png',
				desc: '熟悉基本語法,具有基礎爬蟲的經驗,使用過 BeautifulSoup、Selenium 套件',
			},
		],
		其他工具: [
			{
				name: 'GitHub',
				icon: 'https://img.icons8.com/fluency/100/github.png',
				desc: '使用 GitHub Pages 部署靜態網頁',
			},
			{
				name: 'Git',
				icon: 'https://img.icons8.com/color/100/git.png',
				desc: '熟悉基本指令',
			},
			{
				name: 'Postman',
				icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png',
				desc: '了解如何測試 API',
			},
			{
				name: 'Figma',
				icon: 'https://img.icons8.com/color/100/figma--v1.png',
				desc: '依照 Figma 進行切版',
			},
			{
				name: 'Adobe XD',
				icon: 'https://img.icons8.com/color/100/adobe-xd--v1.png',
				desc: '依照 Adobe XD 進行切版',
			},
			{
				name: 'WordPress',
				icon: 'https://img.icons8.com/fluency/100/wordpress.png',
				desc: '有自己的 WordPress 部落格，使用 Elementor 撰寫文章。',
			},
		],
	}

	return (
		<div id='skill' className='pt-16'>
			<h2 className='pb-1 mx-auto mb-4 border-b-4 border-pink-500 w-fit'>專業技能</h2>
			<p className='font-light text-center'>以下為我目前所學習的技能，並且持續學習中，未來會持續更新。</p>
			<p className='p-1 text-xs text-center'>(懸浮於圖示上可查看我於該技能的程度說明)</p>
			<section className='p-4 mt-8 bg-pink-300'>
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
													content={
														skill.desc !== '' &&
														skill.desc.split(',').map((item, index) => (
															<li className='text-left' key={index}>
																{item}
															</li>
														))
													}
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
