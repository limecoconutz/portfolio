// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {Link,  animateScroll as scroll} from 'react-scroll'
import '../stylesheets/pages/AboutPage.scss';
import colors from '../stylesheets/components/_colors.module.scss';
import {storyTravel, storyDev, storyFreeTime} from '../data/story';
import AboutList from '../components/AboutList';
import ScrollAreaStory from '../components/ScrollAreaStory';

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
             <img className="scroll-area-img" src="https://res.cloudinary.com/dw4xhagfa/image/upload/v1631621039/how-to-draw-a-witch-colour-background_cmyu7d.webp" alt="drawing of witch"/>
             <h2 className="text scroll-area-title">
               Hi! <br/>My name is Cosmina <br/>I am a fullstack web developer
              </h2>
           </div>
          <a to="area_6" className="scroll-area-btn" onClick={scrollMore}>
            <i className="fas fa-angle-double-down"></i>
          </a>
         </section>
         <section className="scroll-area area_2"  id="area2" style={{backgroundColor: `${backgroundColorHandler()}`}}>
           <div className="scroll-area-infos">
             <div className="scroll-area-infos-elem">
              <img className="scroll-area-icon-medium " src="https://cdn-icons-png.flaticon.com/512/3175/3175239.png"  alt="icon"/>
                <h3 className="text scroll-area-subtitle">
                  I grew up in Sinaia, a small town in Romania, in the Carpathian mountains.
                </h3>
             </div>
             <div className="scroll-area-infos-elem">
                <img className="scroll-area-icon-medium" src="https://cdn-icons-png.flaticon.com/512/854/854894.png"  alt="icon"/>
                  <h3 className="text scroll-area-subtitle">
                    I moved to Stockholm, Sweden, in 2016, and have been living here ever since.
                  </h3>
                  </div>
           </div>
          <span className="scroll-area-btn">
            <i className="fas fa-angle-double-down"></i>
          </span>
         </section>
          <section className="scroll-area area_3" id="area3" style={{backgroundColor: `${backgroundColorHandler()}`}}>
            <ScrollAreaStory 
                  img={"https://cdn-icons-png.flaticon.com/512/3069/3069194.png"}
                  title="I used to work in travel"
                  subtitle="Throughout my career, I have been: "
                  story={storyTravel}/>
          <span className="scroll-area-btn">
            <i className="fas fa-angle-double-down"></i>
          </span>
          </section>
          <section className="scroll-area area_4" id="area4" style={{backgroundColor: `${backgroundColorHandler()}`}}>
              <ScrollAreaStory 
                img="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
                title="My path to becoming a developer:"
                story={storyDev}
              />
          <span className="scroll-area-btn">
            <i className="fas fa-angle-double-down"></i>
          </span>
          </section>
          <section className="scroll-area area_5" id="area5" style={{backgroundColor: `${backgroundColorHandler()}`}}>
            <ScrollAreaStory 
            title="In my free time, I like to:"
            story={storyFreeTime}
            />
          <span className="scroll-area-btn">
            <i className="fas fa-angle-double-down"></i>
          </span>
          </section>
          <section className="scroll-area area_6" id="area6" style={{backgroundColor: `${backgroundColorHandler()}`}}>
            <div className="scroll-area-infos">
            <h3 className="title scroll-area-title">
              Thank you for your attention
            </h3>
            </div>
            <span className="scroll-area-btn">
              <i className="fas fa-angle-double-up"></i>
            </span>
          </section>
        </div>
        <div>
          <section className="text text__bright about-notes">
            <p>*This app was created by using <i className="fab fa-react"></i> and <i className="fab fa-sass"></i> </p>
            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          </section>
        </div>
    </div>
  );
}

export default AboutPage;
