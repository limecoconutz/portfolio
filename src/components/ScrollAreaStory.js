import AboutList from "./AboutList";
import {Image, Transformation} from 'cloudinary-react';
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
        // <img className="scroll-area-icon-medium" src={img} alt="icon"/>
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
{/* OR */}
    //           <div className="scroll-area-infos-elem">
    //             <img className="scroll-area-icon-medium"src="" alt=""/>
    //             <h2 className="title scroll-area-title"></h2>
    //           </div>
    //             <AboutList story={storyTravel}/>
    //             {/* OR */}
    //             <div className="scroll-area-infos-elem">
    //             <h3 className="title scroll-area-title"></h3>
    //           </div>
    //           <AboutList story={storyFreeTime}/>