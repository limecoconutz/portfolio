import LogosElem from "./LogosElem";
import softSkills from '../data/skills';

function SkillsCards() {

  return ( 
      // <div className="container ">
            <div className="wrapper">
            <section className="wrapper-list wrapper-list__soft-skills">
              <ul className="wrapper-grid">
                { softSkills.map((skill, index) => (
                    <li className = "wrapper-grid__elem" key={index}>
                      <div className="wrapper-grid__content toggle__text">
                        <p className="wrapper-grid__elem__icon">{skill.icon}</p>
                        <h3 className="text wrapper-grid__text">{skill.name}</h3>
                      </div>
                    </li>
                  ))}
              </ul>
            </section>
            <section className="wrapper-list wrapper-list__tech-skills">
              <div className="wrapper-elem frontend" >
                <h3 className="title text__dark wrapper-elem__title">Frontend</h3>
                <div className="">
                <LogosElem skillType="Frontend"/>
                </div>
              </div>
              <div className="wrapper-elem backend">
                <h3 className="title text text__dark">Backend</h3>
                <div className="">
                <LogosElem skillType="Backend"/>
                </div>
              </div>
              <div className="wrapper-elem tools">
                <h3 className="title text text__dark tools-title">Tools & technologies</h3>
                <div className="">
                <LogosElem skillType="Tools"/>
                </div>
              </div>
            </section>
          </div>  
      // </div>
  )
}

export default SkillsCards;
