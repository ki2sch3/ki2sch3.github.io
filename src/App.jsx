import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Layout from './components/Layout/Layout'
import Portfolio from './components/Portfolio/Portfolio'
import Skill from './components/Skill/Skill'

const App = () => {
	const { hash, key } = useLocation()

	useEffect(() => {
		if (hash) {
			const targetElement = document.getElementById(hash.substring(1))
			targetElement?.scrollIntoView()
		}
	}, [key, hash])

	return (
		<Layout>
			<div className='flex py-20 lg:py-24 items-center gap-8 lg:gap-20 justify-center flex-col lg:flex-row ml-0 lg:ml-20 rounded-s-[5rem] bg-pink-100'>
				<div className='flex flex-col items-center max-w-md lg:items-start'>
					<p className='px-3 text-sm text-white bg-pink-500 border-2 border-pink-500 lg:mx-0 rounded-t-xl rounded-br-xl w-fit'>
						嗨，我是
					</p>
					<div className='mt-2 space-y-6 text-center lg:text-left'>
						<h1 className='font-rubikDoodleShadow'>Molly Su</h1>
						<p className='px-4 text-sm leading-6 xs:px-0 opacity-80'>
							一位熱愛前端的學生，目前就讀於國立臺北科技大學資訊與財金管理系，熱衷於學習新技術，並且希望將所學的知識實際應用在專案中。
						</p>
					</div>
					<Link
						to='/about'
						className='flex lg:ml-auto items-center gap-1 mt-3 mb-5 text-sm font-medium text-pink-500 border-b-[1.5px] border-pink-100 hover:border-pink-400'
					>
						了解更多
						<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='#FF9CB6'>
							<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
						</svg>
					</Link>
					<div>
						<a href='mailto:mollydcxxiii@gmail.com' className='relative z-10 text-lg'>
							mollydcxxiii@gmail.com
						</a>
						<hr className='relative w-full border-4 border-pink-300 bottom-2' />
					</div>
				</div>
				<img src='assets/images/banner.png' className='w-72' alt='banner' />
			</div>
			<Skill />
			<Portfolio />
			<Experience />
			<Contact />
		</Layout>
	)
}

export default App
