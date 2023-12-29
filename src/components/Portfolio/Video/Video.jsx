import React, { useEffect } from 'react'

const Video = ({ video, open, setOpen, targetRef }) => {
	useEffect(() => {
		if (video !== '' && open) {
			document.body.style.overflow = 'hidden'
			targetRef.current.scrollIntoView({ behavior: 'smooth' })
		} else document.body.style.overflow = 'unset'
	}, [video, open])

	return (
		<div className={`${open ? 'block' : 'hidden'} relative top-0 left-0`}>
			<video width='800' className='fixed top-0 bottom-0 left-0 right-0 z-30 m-auto rounded-md' preload controls>
				<source src={`../assets/videos/${video}.mp4`} type='video/mp4' />
			</video>
			<div className='absolute z-20 w-screen h-screen bg-black opacity-50' onClick={() => setOpen('')} />
		</div>
	)
}

export default Video
