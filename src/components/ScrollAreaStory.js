import {Image} from 'cloudinary-react';
import AboutList from "./AboutList";
const cloudName = 'dw4xhagfa';

function ScrollAreaStory ({img, title, subtitle, story}){
  return (
<div className="scroll-area-infos">
      <div className="scroll-area-infos-elem">
      {
        img?
        <Image
        className="scroll-area-icon-medium" 
        cloudName={cloudName} 
        secure={true} 
        upload_preset="ml_default" 
        publicId={img}
        />
        : ''
      }
      {
        title?
        <h3 className="title scroll-area-title" style={{marginLeft: '8px', marginBottom:'0'}}>{title}</h3>
        :''
      }
    </div>
    {
      subtitle?
    <h3 className="title scroll-area-subtitle" style={{fontWeight:'300', marginTop:'0', marginBottom:'0'}}>
      {subtitle}
    </h3>
    :''
    }
    <AboutList story={story}/>
 </div>
  )
}

export default ScrollAreaStory;
