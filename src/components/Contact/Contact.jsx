import { useForm, ValidationError } from '@formspree/react'
import React, { useEffect } from 'react'
import SocialBtn from '../SocialBtn/SocialBtn'

const Contact = () => {
	const [state, handleSubmit] = useForm('xdoqokeg')

	useEffect(() => {
		if (state.succeeded) {
			alert('傳送成功，我會盡快回覆您的訊息，謝謝！')
			document.getElementsByTagName('input')[0].value = ''
			document.getElementsByTagName('textarea')[0].value = ''
			state.succeeded = false
		}
	}, [state.succeeded])

	return (
		<div id='contact' className='px-4 py-8 bg-center bg-no-repeat bg-cover xs:px-8 lg:px-0 lg:py-16 bg-wave'>
			<h2 className='pb-1 mx-auto mb-4 border-b-4 border-pink-500 w-fit'>與我聯繫</h2>
			<p className='font-light text-center'>如果您有任何問題或建議，歡迎與我聯繫！</p>
			<div className='flex items-center justify-center mt-5 mb-10 space-x-4'>
				<SocialBtn />
			</div>
			<form onSubmit={handleSubmit} className='max-w-screen-sm mx-auto space-y-6'>
				<div className='space-y-4 text-sm'>
					<input
						id='email'
						type='email'
						name='email'
						placeholder='電子郵件'
						className='shadow-sm bg-gray-50 border border-gray-300 rounded-lg outline-none block w-full p-2.5 '
						required
					/>
					<ValidationError prefix='Email' field='email' errors={state.errors} />
					<textarea
						id='message'
						name='message'
						placeholder='訊息內容'
						rows='6'
						className='block p-2.5 w-full bg-gray-50 rounded-lg shadow-sm border outline-none border-gray-300'
						required
					/>
					<ValidationError prefix='Message' field='message' errors={state.errors} />
					<p className='text-xs text-text-primary/60'>* 發送前請確認內容無誤，謝謝！</p>
				</div>
				<button
					type='submit'
					className='block py-3 mx-auto font-medium tracking-widest text-white bg-pink-600 rounded-full px-28'
					disabled={state.submitting}
				>
					傳送
				</button>
			</form>
		</div>
	)
}

export default Contact
