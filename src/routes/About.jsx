import Layout from '../components/Layout/Layout'

const About = () => {
	return (
		<Layout>
			<div className='flex flex-col items-center justify-center gap-8 py-12 bg-pink-100 lg:gap-16 lg:flex-row'>
				<img
					src='assets/images/molly.jpg'
					className='object-cover rounded w-96 h-80 hover:origin-center hover:-rotate-3 hover:duration-300 hover:ease-linear hover:scale-105'
					alt='banner'
				/>
				<div className='flex flex-col items-center max-w-md lg:items-start'>
					<p className='px-3 text-sm text-white bg-pink-500 border-2 border-pink-500 lg:mx-0 rounded-t-xl rounded-br-xl w-fit'>
						嗨，我是
					</p>
					<div className='mt-2 mb-5 space-y-6 text-center lg:text-left'>
						<h1 className='font-rubikDoodleShadow'>Molly Su</h1>
						<p className='px-4 text-sm leading-6 xs:px-0 opacity-80'>
							2002 年出生於臺灣新北，目前就讀於國立臺北科技大學資訊與財金管理系。高中時接觸了 Visual
							Basic，發現了對程式設計的熱忱，從而開啟了我的程式之路；在大學時期，我開始接觸前端，
							<span className='text-pink-700'>能夠快速地將自己的想法實現在畫面上，讓我對前端產生了濃厚的興趣</span>
							，並且希望能夠在該領域中不斷精進自己，也期許自己能夠成為一名優秀的前端工程師。
						</p>
					</div>
					<div>
						<a href='mailto:mollydcxxiii@gmail.com' className='relative z-10 text-lg'>
							mollydcxxiii@gmail.com
						</a>
						<hr className='relative w-full border-4 border-pink-300 bottom-2' />
					</div>
				</div>
			</div>
			<div className='max-w-4xl px-[2.8vw] py-12 mx-auto space-y-12 lg:px-0'>
				<section>
					<h2 className='pb-1 mb-5 border-b-4 border-pink-500 w-fit'>性格特質</h2>
					<div className='space-y-3'>
						<h3 className='text-xl font-bold tracking-wide text-pink-600'>ISTJ（代表動物：河狸）</h3>
						<div className='flex flex-col gap-2 sm:gap-4 sm:items-center sm:flex-row'>
							<img src='assets/images/beaver.png' className='object-contain w-36' alt='16personalities' />
							<ul className='pl-5 leading-9 list-disc'>
								<li>責任感極強的使命必達型工作者</li>
								<li>對任何事都認真而專注，擁有縝密、嚴謹的工作思維。</li>
								<li>善於訂定規範、整理 + 優化的雙軌式工作風格</li>
							</ul>
						</div>
						<ul className='flex flex-wrap items-center tracking-wide gap-2 pt-2 text-[0.8rem] font-light'>
							{['熱衷學習', '喜歡嘗試', '善於獨立作業', '坦率', '耐心', '慢熱'].map((item, index) => (
								<li key={index} className='px-3.5 py-0.5 rounded-full bg-pink-200'>
									{item}
								</li>
							))}
						</ul>
					</div>
				</section>
				<section>
					<h2 className='pb-1 mb-5 border-b-4 border-pink-500 w-fit'>學習歷程</h2>
					<div className='flex flex-col-reverse justify-between gap-2 mb-6 xs:gap-0 xs:flex-row'>
						<div className='flex gap-3'>
							<img src='assets/images/ntut.jpg' className='object-cover w-16' alt='ntut' />
							<div>
								<h3>國立臺北科技大學</h3>
								<p className='text-sm opacity-80'>資訊與財金管理系</p>
							</div>
						</div>
						<p className='text-sm tracking-wide opacity-60'>2020.09 - 2024.06</p>
					</div>
					{/* <div className='flex flex-col-reverse justify-between gap-2 xs:flex-row xs:gap-0'>
						<div className='flex gap-3'>
							<img src='assets/images/slhs.jpg' className='object-cover w-16' alt='slhs' />
							<div>
								<h3>臺北市立士林高級商業職業學校</h3>
								<p className='text-sm opacity-80'>資料處理科</p>
							</div>
						</div>
						<p className='text-sm tracking-wide opacity-60'>2017.09 - 2020.06</p>
					</div> */}
				</section>
				<section>
					<h2 className='pb-1 mb-5 border-b-4 border-pink-500 w-fit'>比賽經歷</h2>
					<div className='mb-6 space-y-2'>
						<p>
							<span className='text-pink-700 text-lg font-medium'>精誠金獎</span>
							<span className='text-sm'>（第一屆臺北科大金融科技論壇暨資財之星專題成果發表會）</span>
						</p>
						<div className='flex justify-between items-start gap-6'>
							<img src='assets/images/award-of-ntut.jpg' className='object-cover rounded flex-1 max-w-lg' alt='ntut' />
							<div className='flex-1 space-y-4'>
								<div className='flex items-center mb-4 justify-between'>
									<h3 className='leading-4'>股市光明燈</h3>
									<button className='bg-pink-500 hover:bg-pink-600 text-xs text-white rounded-full px-2.5 py-1'>
										<a href='https://www.youtube.com/watch?v=s92-9di9qa4&t=1s' target='_blank' rel='noreferrer'>
											宣傳影片
										</a>
									</button>
								</div>
								<p>
									於團隊中負責 <strong>UI/UX 設計、前端開發</strong>，並協助後端串接 API。
								</p>
								<p className='space-y-2'>
									<strong>主要功能：</strong>
									<ul className='list-disc text-sm space-y-1.5 pl-4'>
										<li>個股的基本面、技術分析</li>
										<li>天氣相關性分析</li>
										<li>股市 AI 問答</li>
										<li>點燈系統：讓使用者選定產業類別，並通過條件篩選出該產業中最具潛力的個股，最後以儀表板呈現。</li>
										<li>
											個股儀表板：包含財務比率、根據文本做分析輸出情緒分數、重要圖表資訊、相關新聞，以及透過 GPT-4
											模型和資料萃取技術 (RAG) 技術的 AI 聊天機器人。
										</li>
										<li>自選股清單</li>
									</ul>
								</p>
							</div>
						</div>
					</div>
				</section>
				<section>
					<h2 className='pb-1 mb-3 border-b-4 border-pink-500 w-fit'>日常興趣</h2>
					<p className='mb-5 text-sm leading-6 opacity-80'>閒暇之餘，我也會從事一些其他活動，例如：</p>
					<div className='grid w-full grid-cols-2 gap-4 lg:grid-cols-3'>
						<div className='bg-white rounded-b-lg shadow-md lg:w-72'>
							<img
								src='assets/images/paint.png'
								className='object-cover object-center w-full h-40 rounded-t-lg md:h-48'
								alt='paint'
							/>
							<p className='p-2 text-center'>繪畫</p>
						</div>
						<div className='bg-white rounded-b-lg shadow-md lg:w-72'>
							<img
								src='assets/images/digitalnotebook.png'
								className='object-cover object-center w-full h-40 md:h-48'
								alt='digital-notebook'
							/>
							<p className='p-2 text-center'>數位手帳設計</p>
						</div>
						<div className='bg-white rounded-b-lg shadow-md lg:w-72'>
							<img
								src='assets/images/beading.png'
								className='object-cover object-center w-full h-40 rounded-t-lg md:h-48'
								alt='beading'
							/>
							<p className='p-2 text-center'>串珠</p>
						</div>
						<div className='bg-white rounded-b-lg shadow-md lg:w-72'>
							<img
								src='assets/images/food.jpg'
								className='object-cover object-center w-full h-40 rounded-t-lg md:h-48'
								alt='food'
							/>
							<p className='p-2 text-center'>探索美食</p>
						</div>
						<div className='bg-white rounded-b-lg shadow-md lg:w-72'>
							<img
								src='assets/images/bass.jpg'
								className='object-cover object-center w-full h-40 rounded-t-lg md:h-48'
								alt='bass'
							/>
							<p className='p-2 text-center'>貝斯彈奏</p>
						</div>
						<div className='bg-white rounded-b-lg shadow-md lg:w-72'>
							<img
								src='assets/images/lol.jpg'
								className='object-cover object-center w-full h-40 rounded-t-lg md:h-48'
								alt='lol'
							/>
							<p className='p-2 text-center'>觀看電競比賽</p>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	)
}

export default About
