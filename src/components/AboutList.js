function AboutList({story}) {
  return (
    <ul className="scroll-area-infos-list">
      {
        story.map(el => (
          <li key={el.id}>
            <img className="scroll-area-icon-small" src={el.img} alt="icon"/>
            <p className="text" style={{fontSize:'1rem'}}>{el.text}</p>
          </li>
        ))
      }
    </ul>
  );
}

export default AboutList;
