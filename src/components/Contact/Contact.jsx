import SocialBtn from '../SocialBtn/SocialBtn'

const Contact = () => {
	return (
		<div id='contact' className='px-4 py-8 bg-center bg-no-repeat bg-cover xs:px-8 lg:px-0 lg:py-16 bg-wave'>
			<h2 className='pb-1 mx-auto mb-4 border-b-4 border-pink-500 w-fit'>與我聯繫</h2>
			<p className='font-light text-center'>如果您有任何問題或建議，歡迎與我聯繫！</p>
			<div className='flex items-center justify-center mt-5 mb-10 space-x-4'>
				<SocialBtn />
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
