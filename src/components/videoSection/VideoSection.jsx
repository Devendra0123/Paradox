import React,{useState, useEffect} from 'react'
import './videoSection.css'
const VideoSection = () => {

    const [videoUrl, setVideoUrl] = useState('')

    useEffect(() => {
     const url = "https://www.youtube.com/embed/dpEPNioJ1Ik?playlist=dpEPNioJ1Ik&autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0";
     setVideoUrl(url);
    },[])
    
    return (
        <div className='videoSection'>
            <h1 className='video-title'>
                <span>Youtube</span> video
            </h1>
            <div className='overlay'></div>
            <iframe className='video' width="100%" height="100%" frameborder="0" allowFullScreen title='video'
                src={videoUrl}>
            </iframe>
            <div className='bottom-overlay'>

            </div>
        </div>
    )
}

export default VideoSection