import allLogos from '../data/allLogos';

function LogosElem({skillType}) {
  const logos = allLogos.filter(logo => logo.type === skillType);
  return (
    <section className="logos">
    {logos.map(logo =>
    <div className="logos-elem" key={logo.id}>
          <img className="logos-img"  src={logo.link} alt={logo.name}/>
          <p className="text logos-text text__bright font--light">{logo.name}</p>
    </div>
     )
    }
    </section>
    );
}

export default LogosElem;
