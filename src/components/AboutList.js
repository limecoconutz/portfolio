import {Image} from 'cloudinary-react';
const cloudName = 'dw4xhagfa';

function AboutList({story}) {
  return (
    <ul className="scroll-area-infos-list">
      {
        story.map(el => (
          <li key={el.id}>
            <Image 
            className="scroll-area-icon-medium" 
            cloudName={cloudName} 
            secure={true} 
            upload_preset="ml_default"
            publicId={el.publicId} 
            />
            <p className="text" style={{fontSize:'1rem'}}>{el.text}</p>
          </li>
        ))
      }
    </ul>
  );
}

export default AboutList;
