import { useRef, useState } from 'react'
import Video from './Video/Video'

const Portfolio = () => {
	const targetRef = useRef(null)
	const [video, setVideo] = useState('')

	return (
		<>
			<Video video={video} open={video !== ''} setOpen={setVideo} targetRef={targetRef} key={video} />
			<div id='portfolio' ref={targetRef} className='pt-16 mx-auto'>
				<h2 className='pb-1 mx-auto mb-4 border-b-4 border-pink-500 w-fit'>小小作品集</h2>
				<p className='font-light text-center'>以下作品皆可點擊標題前往網站，或者點擊圖片觀看展示影片。</p>
				<div className='flex flex-col flex-wrap justify-center gap-4 mt-8 sm:flex-row'>
					<section className='px-3 py-2 space-y-2 rounded-md sm:w-72 md:w-92'>
						<a href='https://yelp-clone-react.vercel.app/' target='_blank' rel='noreferrer' className='hover:underline'>
							<p className='font-medium'>仿 Yelp 網站</p>
						</a>
						<div className='work__mask' onClick={() => setVideo('yelp-clone-react')}>
							<p className='work__mask__title'>
								<img
									width='24'
									height='20'
									src='https://img.icons8.com/material-outlined/40/ffffff/external-link.png'
									alt='external-link'
								/>
								<span>影片展示</span>
							</p>
							<img
								src='assets/images/yelp-clone-react.png'
								className='object-cover w-full sm:object-top h-60 sm:h-44'
								alt='work'
							/>
							<div class='work__mask__bg' />
						</div>
						<ul className='flex flex-wrap text-xs text-text-primary/80 gap-x-2'>
							<li># React.js (React Router Dom)</li>
							<li># JavaScript</li>
							<li># Tailwind CSS</li>
							<li># Yelp Fusion API</li>
							<li># React Google Maps</li>
							<li># RWD</li>
						</ul>
					</section>
					<section className='px-3 py-2 space-y-2 rounded-md sm:w-72 md:w-92'>
						<a
							href='https://github.com/kir4che/lamamia-blog'
							target='_blank'
							rel='noreferrer'
							className='hover:underline'
						>
							<p className='font-medium'>個人部落格</p>
						</a>
						<div className='work__mask' onClick={() => setVideo('lamamia-blog')}>
							<p className='work__mask__title'>
								<img
									width='24'
									height='20'
									src='https://img.icons8.com/material-outlined/40/ffffff/external-link.png'
									alt='external-link'
								/>
								<span>影片展示</span>
							</p>
							<img
								src='assets/images/lamamia-blog.png'
								className='object-cover w-full sm:object-top h-60 sm:h-44'
								alt='work'
							/>
							<div class='work__mask__bg' />
						</div>
						<ul className='flex flex-wrap text-xs text-text-primary/80 gap-x-2'>
							<li># Next.js (NextAuth)</li>
							<li># Mongoose ODM</li>
							<li># TypeScript</li>
							<li># SWR</li>
							<li># Tailwind CSS</li>
							<li># RWD</li>
							<li># SendGrid Mail</li>
						</ul>
					</section>
					<section className='px-3 py-2 space-y-2 rounded-md sm:w-72 md:w-92'>
						<a
							href='https://kir4che.github.io/legislative-campaign-official-website/'
							target='_blank'
							rel='noreferrer'
							className='hover:underline'
						>
							<p className='font-medium'>立委競選官網</p>
						</a>
						<div className='work__mask' onClick={() => setVideo('legislative-campaign')}>
							<p className='work__mask__title'>
								<img
									width='24'
									height='20'
									src='https://img.icons8.com/material-outlined/40/ffffff/external-link.png'
									alt='external-link'
								/>
								<span>影片展示</span>
							</p>
							<img
								src='assets/images/legislative-campaign.png'
								className='object-cover w-full sm:object-top h-60 sm:h-44'
								alt='work'
							/>
							<div class='work__mask__bg' />
						</div>
						<ul className='flex flex-wrap text-xs text-text-primary/80 gap-x-2'>
							<li># React.js</li>
							<li># TypeScript</li>
							<li># Tailwind CSS</li>
							<li># Radix UI</li>
							<li># RWD</li>
							<li># Vite</li>
						</ul>
					</section>
					<section className='px-3 py-2 space-y-2 rounded-md sm:w-72 md:w-92'>
						<a
							href='https://space-tourism-website-livid.vercel.app/'
							target='_blank'
							rel='noreferrer'
							className='hover:underline'
						>
							<p className='font-medium'>航空旅遊介紹網站</p>
						</a>
						<div className='work__mask' onClick={() => setVideo('space-tourism')}>
							<p className='work__mask__title'>
								<img
									width='24'
									height='20'
									src='https://img.icons8.com/material-outlined/40/ffffff/external-link.png'
									alt='external-link'
								/>
								<span>影片展示</span>
							</p>
							<img
								src='assets/images/space-tourism.png'
								className='object-cover w-full sm:object-top h-60 sm:h-44'
								alt='work'
							/>
							<div class='work__mask__bg' />
						</div>
						<ul className='flex flex-wrap text-xs text-text-primary/80 gap-x-2'>
							<li># React.js (React Router Dom、React Burger Menu)</li>
							<li># TypeScript</li>
							<li># Tailwind CSS</li>
							<li># RWD</li>
						</ul>
					</section>
					<section className='px-3 py-2 space-y-2 rounded-md sm:w-72 md:w-92'>
						<a
							href='https://kir4che.github.io/starbucks-clone/'
							target='_blank'
							rel='noreferrer'
							className='hover:underline'
						>
							<p className='font-medium'>切版練習</p>
						</a>
						<img
							src='assets/images/starbucks-clone.png'
							className='object-cover w-full sm:object-top h-60 sm:h-44'
							alt='work'
						/>
						<ul className='flex flex-wrap text-xs text-text-primary/80 gap-x-2'>
							<li># JavaScript</li>
							<li># SCSS</li>
							<li># RWD</li>
							<li># Vite</li>
						</ul>
					</section>
					<section className='px-3 py-2 space-y-2 rounded-md sm:w-72 md:w-92'>
						<a href='https://kir4che.github.io/sushi-man/' target='_blank' rel='noreferrer' className='hover:underline'>
							<p className='font-medium'>切版練習</p>
						</a>
						<img
							src='assets/images/sushi-man.png'
							className='object-cover w-full sm:object-top h-60 sm:h-44'
							alt='work'
						/>
						<ul className='flex flex-wrap text-xs text-text-primary/80 gap-x-2'>
							<li># JavaScript</li>
							<li># SCSS</li>
							<li># AOS</li>
							<li># RWD</li>
							<li># Vite</li>
						</ul>
					</section>
				</div>
			</div>
		</>
	)
}

export default Portfolio
