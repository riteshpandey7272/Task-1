import React from 'react';

const Videocard = () => {
  return (
    <div>
      <video 
        id="11f06ae4-6584-2cd2-6412-b0ba20af5f6d-video" 
        autoPlay 
        loop 
        style={{ 
          backgroundImage: 'url(https://cdn.prod.website-files.com/609486d2fafa37698a57db5b/6359a8f75df552e3c6eae837_hero-video-new-poster-00001.jpg)', 
          height: '620px',
          borderRadius: '20px'
        }} 
        muted 
        playsInline 
        data-wf-ignore="true" 
        data-object-fit="cover"
      >
        <source 
          src="https://cdn.prod.website-files.com/609486d2fafa37698a57db5b/6359a8f75df552e3c6eae837_hero-video-new-transcode.mp4" 
          data-wf-ignore="true"
        />
        <source 
          src="https://cdn.prod.website-files.com/609486d2fafa37698a57db5b/6359a8f75df552e3c6eae837_hero-video-new-transcode.webm" 
          data-wf-ignore="true"
        />
      </video>
    </div>
  )
}

export default Videocard;
