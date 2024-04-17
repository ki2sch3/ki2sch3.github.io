import { useState } from 'react'
import { Link } from 'react-router-dom'
import SocialBtn from '../SocialBtn/SocialBtn'

const Header = () => {
	const [hoveredTab, setHoveredTab] = useState('')

	return (
		<header className='sticky top-0 z-20 bg-white'>
			<nav className='px-4 lg:px-6 py-2.5'>
				<div className='flex flex-wrap items-center justify-between max-w-screen-xl mx-auto'>
					<a href='/' className='flex'>
						<img src='assets/images/logo.png' className='h-8' alt='Logo' />
						<span className='self-center text-xl font-semibold whitespace-nowrap'>kir2ch3</span>
					</a>
					<div className='items-center justify-between hidden w-full lg:flex lg:w-auto'>
						<ul className='flex flex-col text-sm font-medium lg:flex-row lg:space-x-8'>
							<li>
								<Link
									to='/#skill'
									className={`${
										hoveredTab !== 'skill' ? '' : 'text-pink-600'
									} block py-2 pl-3 border-b border-gray-100 transition-opacity duration-100 lg:border-0 lg:p-0`}
									onMouseOver={() => setHoveredTab('skill')}
									onMouseLeave={() => setHoveredTab('')}
								>
									專業技能
								</Link>
							</li>
							<li>
								<Link
									to='/#experience'
									className={`${
										hoveredTab !== 'experience' ? '' : 'text-pink-600'
									} block py-2 pl-3 border-b border-gray-100 transition-opacity duration-100 g:border-0 lg:p-0`}
									onMouseOver={() => setHoveredTab('experience')}
									onMouseLeave={() => setHoveredTab('')}
								>
									工作經歷
								</Link>
							</li>
							<li>
								<Link
									to='/#portfolio'
									className={`${
										hoveredTab !== 'portfolio' ? '' : 'text-pink-600'
									} block py-2 pl-3 border-b border-gray-100 transition-opacity duration-100 lg:border-0 lg:p-0`}
									onMouseOver={() => setHoveredTab('portfolio')}
									onMouseLeave={() => setHoveredTab('')}
								>
									作品集
								</Link>
							</li>
							<li>
								<Link
									to='/#contact'
									className={`${
										hoveredTab !== 'contact' ? '' : 'text-pink-600'
									} block py-2 pl-3 border-b border-gray-100 transition-opacity duration-100 lg:border-0 lg:p-0`}
									onMouseOver={() => setHoveredTab('contact')}
									onMouseLeave={() => setHoveredTab('')}
								>
									與我聯繫
								</Link>
							</li>
						</ul>
					</div>
					<div className='flex items-center space-x-2.5'>
						<SocialBtn />
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
