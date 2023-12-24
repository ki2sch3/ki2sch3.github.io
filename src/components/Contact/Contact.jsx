const Contact = () => {
	return (
		<div id='contact' className='px-4 py-8 bg-center bg-no-repeat bg-cover xs:px-8 lg:px-0 lg:py-16 bg-wave'>
			<h2 className='pb-1 mx-auto mb-4 border-b-4 border-pink-500 w-fit'>與我聯繫</h2>
			<p className='font-light text-center'>如果您有任何問題或建議，歡迎與我聯繫！</p>
			<div className='flex items-center justify-center mt-5 mb-10 space-x-5'>
				<a href='mailto:mollydcxxiii@gmail.com'>
					<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='#FF9CB6'>
						<path d='M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z' />
					</svg>
				</a>
				<a href='https://www.linkedin.com/in/kir4che/' target='_blank' rel='noreferrer'>
					<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='#FF9CB6'>
						<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
					</svg>
				</a>
				<a href='https://github.com/kir4che' target='_blank' rel='noreferrer'>
					<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='#FF9CB6'>
						<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
					</svg>
				</a>
				<a href='https://www.instagram.com/kir4che/' target='_blank' rel='noreferrer'>
					<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='#FF9CB6'>
						<path d='M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z' />
					</svg>
				</a>
			</div>
			<form action='#' className='max-w-screen-sm mx-auto space-y-6'>
				<div className='space-y-4 text-sm'>
					<input
						type='email'
						id='email'
						className='shadow-sm bg-gray-50 border border-gray-300 rounded-lg outline-none block w-full p-2.5 '
						placeholder='電子郵件'
						required
					/>
					<input
						type='text'
						id='subject'
						className='block w-full p-3 border border-gray-300 rounded-lg shadow-sm outline-none bg-gray-50 '
						placeholder='主旨'
						required
					/>
					<textarea
						id='message'
						rows='6'
						className='block p-2.5 w-full bg-gray-50 rounded-lg shadow-sm border outline-none border-gray-300'
						placeholder='訊息內容'
					/>
					<p className='text-xs text-text-primary/60'>* 發送前請確認內容無誤，謝謝！</p>
				</div>
				<button
					type='submit'
					className='block py-3 mx-auto font-medium tracking-widest text-white bg-pink-600 rounded-full px-28'
				>
					傳送
				</button>
			</form>
		</div>
	)
}

export default Contact
