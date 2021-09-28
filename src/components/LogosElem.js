import {Image, Transformation} from 'cloudinary-react';
import allLogos from '../data/allLogos';

const cloudName = 'dw4xhagfa';

function LogosElem({skillType}) {
  const logos = allLogos.filter(logo => logo.type === skillType);
  return (
    <section className="logos">
    {logos.map(logo =>
    <div className="logos-elem " key={logo.id}>
          <Image className="logos-img" cloudName={cloudName} secure={true} upload_preset="ml_default" publicId={logo.publicId}> 
            <Transformation width='50' height='50' crop="fit"/>
          </Image>
          <p className="text logos-text text__dark">{logo.name}</p>
    </div>
     )
    }
    </section>
    );
}

export default LogosElem;
