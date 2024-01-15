import React, { useEffect } from 'react'

const Video = ({ video, open, setOpen, targetRef, desc = '' }) => {
	useEffect(() => {
		if (video !== '' && open) {
			document.body.style.overflow = 'hidden'
			targetRef.current.scrollIntoView({ behavior: 'smooth' })
		} else document.body.style.overflow = 'unset'
	}, [video, open])

	return (
		<div className={`${open ? 'block' : 'hidden'} relative top-0 left-0`}>
			<div className='bg-white fixed w-fit max-w-3xl top-0 max-h-[90%] h-fit overflow-y-auto bottom-0 left-0 right-0 z-30 m-auto rounded-md'>
				<video width='800' className='rounded-t-md' preload controls>
					<source src={`assets/videos/${video}.mp4`} type='video/mp4' />
				</video>
				{desc !== '' && <p className='p-4 pb-6 whitespace-pre-line leading-8'>{desc}</p>}
			</div>
			<div className='absolute z-20 w-screen h-screen bg-black opacity-50' onClick={() => setOpen('')} />
		</div>
	)
}

export default Video
