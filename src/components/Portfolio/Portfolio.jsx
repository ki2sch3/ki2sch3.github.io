import { useRef, useState } from 'react'
import Video from './Video/Video'

const Portfolio = () => {
	const targetRef = useRef(null)
	const [video, setVideo] = useState('')
	const [description, setDescription] = useState('')

	return (
		<>
			<Video
				video={video}
				open={video !== ''}
				setOpen={setVideo}
				targetRef={targetRef}
				desc={description}
				key={video}
			/>
			<div id='portfolio' ref={targetRef} className='pt-16 mx-auto'>
				<h2 className='pb-1 mx-auto mb-4 border-b-4 border-pink-500 w-fit'>小小作品集</h2>
				<p className='font-light text-center'>以下作品皆可點擊標題前往網站，或者點擊圖片觀看展示影片。</p>
				<div className='flex flex-col flex-wrap justify-center mt-8 gap-y-2 gap-x-4 sm:flex-row'>
					<section className='px-3 py-2 space-y-2 rounded-md sm:w-72 md:w-92'>
						<p>
							<a href='https://stocklight.co/' target='_blank' rel='noreferrer' className='font-medium hover:underline'>
								股市光明燈
							</a>
							<span className='text-xs opacity-80'>（負責前端、UI/UX 設計）</span>
						</p>
						<div
							className='work__mask'
							onClick={() => {
								setVideo('stocklight')
								setDescription(
									'一個結合股市資訊與點燈祈福文化的平台，並結合深度學習分析，提供使用者查看具備優秀條件之個股的儀表板。'
								)
							}}
						>
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
								src='assets/images/stocklight.png'
								className='object-cover w-full sm:object-top h-60 sm:h-44'
								alt='work'
							/>
							<div class='work__mask__bg' />
						</div>
						<ul className='flex flex-wrap text-xs text-text-primary/80 gap-x-2'>
							<li># Next.js</li>
							<li># JavaScript</li>
							<li># Tailwind CSS</li>
							<li># Material UI</li>
							<li># AOS</li>
							<li># NextAuth</li>
							<li># Apache ECharts</li>
							<li># OpenAI API</li>
							<li># RWD</li>
						</ul>
					</section>
					<section className='px-3 py-2 space-y-2 rounded-md sm:w-72 md:w-92'>
						<a
							href='https://mern-ecommerce-client-seven.vercel.app/'
							target='_blank'
							rel='noreferrer'
							className='font-medium hover:underline'
						>
							線上購物網站
						</a>
						<div
							className='work__mask'
							onClick={() => {
								setVideo('mern-ecommerce')
								setDescription(
									'具備前後台的線上購物網站，前台提供會員購買商品，並下單進行付款 (暫無串接金流)，而訂單記錄會顯示於會員資料；後台則提供管理員新增 / 刪除 / 編輯商品、訊息、訂單管理，以及查看所有顧客的訂單資訊。\n\n∙ 以 Fetch 串接後端 API\n∙ 商品頁透過 useState、React Router (useNavigate、useParams) 可依照推薦、熱銷以及商品類型來分類。\n∙ 透過 React Router (Link、useParams) 可點擊商品卡片連結到該商品的詳細資料\n∙ 利用 Context API 同步購物車狀態\n∙ 透過 Swiper 建立推薦商品輪播、動態輪播背景\n∙ 使用 Frame Motion 製作跑馬燈\n∙ 使用 Headless UI 設計 FAQ、表單的彈跳視窗\n∙ 利用 js-cookie 儲存登入狀態\n\n∙ 使用 Express + TypeScript + Mongoose 建立後端伺服器\n∙ 採用 RESTful 風格撰寫 API，以操作資料庫的增刪查改。\n∙ 使用 express-session 將使用者資料保存在伺服器端'
								)
							}}
						>
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
								src='assets/images/mern-ecommerce.png'
								className='object-cover w-full sm:object-top h-60 sm:h-44'
								alt='work'
							/>
							<div class='work__mask__bg' />
						</div>
						<ul className='flex flex-wrap text-xs text-text-primary/80 gap-x-2'>
							<li># React.js</li>
							<li># TypeScript</li>
							<li># Tailwind CSS</li>
							<li># React Router Dom</li>
							<li># Headless UI</li>
							<li># Framer Motion</li>
							<li># Express</li>
							<li># MongoDB</li>
							<li># RWD</li>
						</ul>
					</section>
					<section className='px-3 py-2 space-y-2 rounded-md sm:w-72 md:w-92'>
						<p>
							<a
								href='https://yelp-clone-react.vercel.app/'
								target='_blank'
								rel='noreferrer'
								className='font-medium hover:underline'
							>
								仿 Yelp 網站
							</a>
							<span className='text-xs opacity-80'>（需開啟 cors anywhere 才能使用）</span>
						</p>
						<div
							className='work__mask'
							onClick={() => {
								setVideo('yelp-clone-react')
								setDescription(
									'使用者可以根據地點或類別查詢附近店家，還可以透過篩選器進行更精準的搜尋，旁邊有 Google Maps 顯示店家位置。\n\n∙ 搜尋按鈕是先用useState取得輸入資訊，再使用 useNavigate 進行跳轉。\n∙ 使用 useState 更新篩選器，並用 useSearchParams 的 set 更改網址的參數。\n∙ 清除篩選則是藉由 useState 先將資料設為預設，再用 useSearchParams 的 delete 清空網址的參數。\n∙ 先以 useSearchParams 的 get 取得網址的參數，將參數傳入 url，並以 Fetch 串接 Yelp Fusion API 取得店家資訊。\n∙ 跨域問題透過 cors-anywhere 暫時處理\n∙ 透過 React Google Maps 呈現店家於地圖上的位置'
								)
							}}
						>
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
							<li># React.js</li>
							<li># JavaScript</li>
							<li># Tailwind CSS</li>
							<li># React Router Dom</li>
							<li># Yelp Fusion API</li>
							<li># React Google Maps</li>
							<li># RWD</li>
						</ul>
					</section>
					<section className='px-3 py-2 space-y-2 rounded-md sm:w-72 md:w-92'>
						<a
							href='https://space-tourism-website-livid.vercel.app/'
							target='_blank'
							rel='noreferrer'
							className='font-medium hover:underline'
						>
							航空旅遊介紹網站
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
							<li># React.js</li>
							<li># TypeScript</li>
							<li># Tailwind CSS</li>
							<li># React Router Dom</li>
							<li># React Burger Menu</li>
							<li># RWD</li>
						</ul>
					</section>
					<section className='px-3 py-2 space-y-2 rounded-md sm:w-72 md:w-92'>
						<a
							href='https://ki2sch3.github.io/sushi-man/'
							target='_blank'
							rel='noreferrer'
							className='font-medium hover:underline'
						>
							切版練習
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
					<section className='px-3 py-2 space-y-2 rounded-md sm:w-72 md:w-92'></section>
					<section className='px-3 py-2 space-y-2 rounded-md sm:w-72 md:w-92'></section>
				</div>
			</div>
		</>
	)
}

export default Portfolio
