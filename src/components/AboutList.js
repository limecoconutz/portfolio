function AboutList({story}) {
  return (
    <ul className="scroll-area-infos-list">
      {
        story.map(el => (
          <li key={el.id}>
            <img className="scroll-area-icon-small" src={el.img}/>
            <p className="text">{el.text}</p>
          </li>
        ))
      }
    </ul>
  );
}

export default AboutList;
