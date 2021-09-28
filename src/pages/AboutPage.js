import {animateScroll as scroll} from 'react-scroll'
import {Image} from 'cloudinary-react';

import {storyTravel, storyDev, storyFreeTime} from '../data/story';
import ScrollAreaStory from '../components/ScrollAreaStory';
import '../stylesheets/pages/AboutPage.scss';
import colors from '../stylesheets/components/_colors.module.scss';

const cloudName = 'dw4xhagfa';

function AboutPage() {
  console.log(storyTravel);
  const getRandomInt = (max) =>Math.floor(Math.random() * max);
  const allColors = Object.values(colors);
  const backgroundColorHandler = () =>  `${allColors[getRandomInt(allColors.length)]}`;
  const scrollMore = () => {
  scroll.scrollMore(100);
  }
  return (
    <div className="AboutPage">
      <div className="scroll-container">
        <section className="scroll-area area_1" id="area1" style={{backgroundColor: `${backgroundColorHandler()}`}}>
           <div className="scroll-area-infos">
            <Image className="scroll-area-img" cloudName={cloudName} secure={true} upload_preset="ml_default" publicId='how-to-draw-a-witch-colour-background_cmyu7d.webp'> 
            </Image>
             <h2 className="text scroll-area-title">
               Hi! <br/>My name is Cosmina <br/>I am a fullstack web developer
              </h2>
           </div>
           <span class="arrow bounce scroll-area-btn" onClick={scrollMore()}>
              <i className="fas fa-angle-double-down"></i>
           </span>
        </section>
        <section className="scroll-area area_2"  id="area2" style={{backgroundColor: `${backgroundColorHandler()}`}}>
           <div className="scroll-area-infos">
             <div className="scroll-area-infos-elem">
             <Image 
             className="scroll-area-icon-medium" 
             cloudName={cloudName} 
             secure={true} 
             upload_preset="ml_default" 
             publicId='landscape_oa30qe.png'
             />
                <h3 className="text scroll-area-subtitle area2-subtitle">
                  I grew up in Sinaia, a small town in Romania, in the Carpathian mountains.
                </h3>
             </div>
             <div className="scroll-area-infos-elem">
             <Image 
             className="scroll-area-icon-medium" 
             cloudName={cloudName} 
             secure={true} 
             upload_preset="ml_default" 
             publicId='destination_lk8ygq.png'
             />
             <h3 className="text scroll-area-subtitle area2-subtitle">
                I moved to Stockholm, Sweden, in 2016, and have been living here ever since.
             </h3>
             </div>
           </div>
           <span class="arrow bounce scroll-area-btn">
              <i className="fas fa-angle-double-down"></i>
           </span>
        </section>
        <section className="scroll-area area_3" id="area3" style={{backgroundColor: `${backgroundColorHandler()}`}}>
            <ScrollAreaStory 
                  img={"signpost_hj4xxx.png"}
                  title="I used to work in travel"
                  subtitle="Throughout my career, I have been: "
                  story={storyTravel}/>
           <span class="arrow bounce scroll-area-btn">
              <i className="fas fa-angle-double-down"></i>
           </span>
        </section>
        <section className="scroll-area area_4" id="area4" style={{backgroundColor: `${backgroundColorHandler()}`}}>
              <ScrollAreaStory 
                img="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
                title="My path to becoming a developer:"
                story={storyDev}
              />
           <span class="arrow bounce scroll-area-btn">
              <i className="fas fa-angle-double-down"></i>
           </span>
        </section>
        <section className="scroll-area area_5" id="area5" style={{backgroundColor: `${backgroundColorHandler()}`}}>
            <ScrollAreaStory 
            title="In my free time, I like to:"
            story={storyFreeTime}
            />
           <span class="arrow bounce scroll-area-btn">
              <i className="fas fa-angle-double-down"></i>
           </span>
        </section>
        <section className="scroll-area area_6" id="area6" style={{backgroundColor: `${backgroundColorHandler()}`}}>
            <div className="scroll-area-infos">
            <h3 className="title scroll-area-title">
              Thank you for your attention
            </h3>
            </div>
          <section className="text text__bright about-notes">
            <p>*This app was created by using <i className="fab fa-react"></i> and <i className="fab fa-sass"></i> </p>
            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          </section>
            <span class="arrow bounce scroll-area-btn">
              <i className="fas fa-angle-double-up"></i>
           </span>
        </section>
        </div>
      <div>
        </div>
    </div>
  );
}

export default AboutPage;
