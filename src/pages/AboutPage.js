// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {animateScroll as scroll} from 'react-scroll'
import '../stylesheets/pages/AboutPage.scss';
import colors from '../stylesheets/components/_colors.module.scss';
import {storyTravel, storyDev, storyFreeTime} from '../data/story';
import AboutList from '../components/AboutList';

function AboutPage() {
  console.log(storyTravel);
  const getRandomInt = (max) =>Math.floor(Math.random() * max);
  const allColors = Object.values(colors);
  const backgroundColorHandler = () =>  `${allColors[getRandomInt(allColors.length)]}`;

  // const  scrollToSection = (area) => {
  //   scroller.scrollTo(area, {
  //     duration: 800,
  //     delay: 0,
  //     smooth: "easeInOutQuart",
  //   });
  // };

  return (
    <div className="AboutPage">
      {/* <header>
        <h1 className="title text__bright" style={{textAlign: 'center', fontWeight: '200'}}>About me</h1>
      </header> */}
      <div className="scroll-container">
         <section className="scroll-area area_1" id="area1" style={{backgroundColor: `${backgroundColorHandler()}`}}>
           <div className="scroll-area-infos">
             <img className="scroll-area-img" src="https://res.cloudinary.com/dw4xhagfa/image/upload/v1631621039/how-to-draw-a-witch-colour-background_cmyu7d.webp" alt="drawing of witch"/>
             <h2 className="text scroll-area-title">
               Hi! <br/>My name is Cosmina <br/>I am a fullstack web developer
              </h2>
           </div>
          <span className="scroll-area-btn" onClick={()=>scroll.scrollTo("area_2")}>
            <i class="fas fa-angle-double-down"></i>
          </span>
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
            <i class="fas fa-angle-double-down"></i>
          </span>
         </section>
          <section className="scroll-area area_3" id="area3" style={{backgroundColor: `${backgroundColorHandler()}`}}>
            <div className="scroll-area-infos">
              <div className="scroll-area-infos-elem">
                <img className="scroll-area-icon-medium" src="https://cdn-icons-png.flaticon.com/512/3069/3069194.png"  alt="icon"/>
                <h3 className="title scroll-area-title">
                   I used to work in travel
                </h3>
              </div>
              <h3 className="title scroll-area-subtitle" style={{fontWeight:'300', marginTop:'0', marginBottom:'0'}}>
              Throughout my career, I have been: </h3>
                <AboutList story={storyTravel}/>
              <p className="text">and much more...</p>
            </div>
          <span className="scroll-area-btn">
            <i class="fas fa-angle-double-down"></i>
          </span>
          </section>
          <section className="scroll-area area_4" id="area4" style={{backgroundColor: `${backgroundColorHandler()}`}}>
              <div className="scroll-area-infos">
                <div className="scroll-area-infos-elem">
                  <img className="scroll-area-icon-medium" src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" alt="icon"/>
                  <h2 className="title scroll-area-title" style={{marginLeft: '8px', marginBottom:'0'}}>
                    My path to becoming a developer:
                  </h2>
                </div>
                <AboutList story={storyDev}/>
            </div>
          <span className="scroll-area-btn">
            <i class="fas fa-angle-double-down"></i>
          </span>
          </section>
          <section className="scroll-area area_5" id="area5" style={{backgroundColor: `${backgroundColorHandler()}`}}>
            <div className="scroll-area-infos">
              <div className="scroll-area-infos-elem">
                 <h3 className="title scroll-area-title" style={{marginLeft: '8px', marginBottom:'0'}}>In my free time, I like to</h3>
              </div>
              <AboutList story={storyFreeTime} />
            </div> 
          <span className="scroll-area-btn">
            <i class="fas fa-angle-double-down"></i>
          </span>
          </section>
          <section className="scroll-area area_6" id="area6" style={{backgroundColor: `${backgroundColorHandler()}`}}>
            <div className="scroll-area-infos">
            <h3 className="title scroll-area-title">
              Thank you for your attention
            </h3>
            </div>
            <span className="scroll-area-btn">
              <i class="fas fa-angle-double-up"></i>
            </span>
          </section>
        </div>
        <div>
          <section className="text text__bright about-notes">
            <p>*This app was created by using <i class="fab fa-react"></i> and <i class="fab fa-sass"></i> </p>
            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          </section>
        </div>
    </div>
  );
}

export default AboutPage;
