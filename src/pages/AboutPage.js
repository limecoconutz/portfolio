import '../stylesheets/pages/AboutPage.scss';
import colors from '../stylesheets/components/_colors.module.scss';
import {storyTravel, storyDev, storyFreeTime} from '../data/story';
import AboutList from '../components/AboutList';

function AboutPage() {
  console.log(storyTravel);
  const getRandomInt = (max) =>Math.floor(Math.random() * max);
  const allColors = Object.values(colors);

  const backgroundColorHandler = () => {
    const currentColor = allColors[getRandomInt(allColors.length)];
    if(currentColor === '#fff1e6ff' || currentColor === '#fde2e4ff'){
    return {backgroundColor: `${currentColor}`, color: `#535166ff`} }
    else {
      return {backgroundColor: `${currentColor}`};
    }
  }

  const scrollHandler = () => {

  }

  return (
    <div className="AboutPage">
      <header>
        <h1 className="title text__bright" style={{textAlign: 'center', fontWeight: '200'}}>About me</h1>
      </header>
      <div className="scroll-container">
         <section className="scroll-area" id="area1" style={backgroundColorHandler()}>
           <div className="scroll-area-infos">
             <img className="scroll-area-img" src="https://res.cloudinary.com/dw4xhagfa/image/upload/v1631621039/how-to-draw-a-witch-colour-background_cmyu7d.webp"/>
             <h2 className="text scroll-area-title">
               Hi! <br/>My name is Cosmina <br/>I am a fullstack web developer
              </h2>
           </div>
          <a href="#area2" className="scroll-area-btn">
            <i class="fas fa-angle-double-down"></i>
          </a>
         </section>
         <section className="scroll-area"  id="area2" style={backgroundColorHandler()}>
           <div className="scroll-area-infos">
             <div className="scroll-area-infos-elem">
              <img className="scroll-area-icon-medium " src="https://cdn-icons-png.flaticon.com/512/3175/3175239.png"/>
                <h3 className="text scroll-area-subtitle">
                  I grew up in Sinaia, a small town in Romania, in the Carpathian mountains.
                </h3>
             </div>
             <div className="scroll-area-infos-elem">
                <img className="scroll-area-icon-medium" src="https://cdn-icons-png.flaticon.com/512/854/854894.png"/>
                  <h3 className="text scroll-area-subtitle">
                    I moved to Stockholm, Sweden, in 2016, and have been living here ever since.
                  </h3>
                  </div>
           </div>
          <a href="#area3" className="scroll-area-btn">
            <i class="fas fa-angle-double-down"></i>
          </a>
         </section>
          <section className="scroll-area" id="area3" style={backgroundColorHandler()}>
            <div className="scroll-area-infos">
              <div className="scroll-area-infos-elem">
                <img className="scroll-area-icon-medium" src="https://cdn-icons-png.flaticon.com/512/3069/3069194.png"/>
                <h3 className="title scroll-area-title">
                   I used to work in travel
                </h3>
              </div>
              <h3 className="title" style={{fontWeight:'300', fontSize: '1.8rem', marginTop:'0', marginBottom:'0'}}>
              Throughout my career, I have been: </h3>
                <AboutList story={storyTravel}/>
              <p className="text">and much more...</p>
            </div>
          <a href="#area4" className="scroll-area-btn">
            <i class="fas fa-angle-double-down"></i>
          </a>
          </section>
          <section className="scroll-area" id="area4" style={backgroundColorHandler()}>
              <div className="scroll-area-infos">
                <div className="scroll-area-infos-elem">
                  <img className="scroll-area-icon-medium" src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"/>
                  <h2 className="title scroll-area-title" style={{marginLeft: '8px', marginBottom:'0'}}>
                    My path to becoming a developer has involved:
                  </h2>
                </div>
                <AboutList story={storyDev}/>
            </div>
          <a href="#area5" className="scroll-area-btn">
            <i class="fas fa-angle-double-down"></i>
          </a>
          </section>
          <section className="scroll-area" id="area5" style={backgroundColorHandler()}>
            <div className="scroll-area-infos">
              <div className="scroll-area-infos-elem">
                 <h3 className="title scroll-area-title" style={{marginLeft: '8px', marginBottom:'0'}}>In my free time, I like to</h3>
              </div>
              <AboutList story={storyFreeTime} />
            </div> 
          <a href="#area6" className="scroll-area-btn">
            <i class="fas fa-angle-double-down"></i>
          </a>
          </section>
          <section className="scroll-area" id="area6" style={backgroundColorHandler()}>
            <div className="scroll-area-infos">
            <h3 className="title scroll-area-title">
              Thank you for your attention
            </h3>
            </div>
            <a href="#area1" className="scroll-area-btn">
              <i class="fas fa-angle-double-up"></i>
            </a>
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

{/* {
  myStory.map(storyPart => (
    <section className="scroll-area" style={backgroundColorHandler()} key={storyPart.id}>
      <h3 className="title scroll-area-title">{storyPart.parts[0].title}</h3>
      <p className="text">{storyPart.parts[0].description}</p>
      <ul>
      {
        storyPart.parts[0].list?
        
          storyPart.parts[0].list.map(el => <li>{el}</li>
          )
         :
        ''
      }
      </ul>
      <img className="scroll-area-img"src={storyPart.parts[0].img[0]}/>
    </section>
  ))
} */}