const Experience = () => {
	return (
		<div id='experience' className='max-w-screen-sm px-4 py-8 mx-auto space-y-8 xs:px-8 lg:px-0 lg:py-16'>
			<h2 className='pb-1 mx-auto border-b-4 border-pink-500 w-fit'>工作經歷</h2>
			<div className='space-y-4'>
				<details className='group space-y-3 [&_summary::-webkit-details-marker]:hidden' open>
					<summary className='flex items-center justify-between px-4 py-3 font-medium tracking-wide text-white bg-pink-500 rounded-md cursor-pointer'>
						<p className='flex flex-col justify-between w-full pl-2 pr-4 font-medium xs:flex-row'>
							<span>IT 實習生 @ mrhost</span>
							<span>2022.11 － 2023.05</span>
						</p>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							className='w-5 h-5 transition duration-300 shrink-0 group-open:-rotate-180'
						>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
						</svg>
					</summary>
					<div className='p-4 space-y-3 border-2 border-pink-500 rounded-md'>
						<div className='flex items-center gap-4 text-[0.8rem]'>
							<p className='flex items-center gap-1'>
								<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24'>
									<path d='M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z' />
								</svg>
								<span>臺北市信義區</span>
							</p>
							<p className='flex items-center gap-2'>
								<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24'>
									<path d='M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z' />
								</svg>
								<a
									href='https://www.mrhost.com.tw/'
									target='_blank'
									className='hover:underline hover:text-pink-500'
									rel='noreferrer'
								>
									mrhost
								</a>
							</p>
						</div>
						<ul className='pl-5 leading-7 list-disc'>
							<li>利用 Apps Script 自動化 Google 試算表的工作流程</li>
							<li>維使用 Bootstrap 5 構建一頁式網站</li>
							<li>透過 SiteMinder 協助旅館上架資訊、房型，以及調整價格。</li>
							<li>建立 SOP 確保日常工作流程的正確及一致性</li>
							<li>於 Wordpress 撰寫 SEO 文章</li>
						</ul>
						<ul className='flex items-center flex-wrap tracking-wide gap-2 pt-2 text-[0.8rem] font-light'>
							{['App Script', 'HTML', 'CSS', 'BootStrap 5', 'SiteMinder', 'WordPress'].map((item, index) => (
								<li key={index} className='px-3.5 py-0.5 rounded-full bg-pink-200'>
									{item}
								</li>
							))}
						</ul>
					</div>
				</details>
			</div>
		</div>
	)
}

export default Experience
