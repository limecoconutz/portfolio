function ScrollArea({areaNumber, backgroundColorHandler}) {
  const nameOfArea = `area_${areaNumber}`;

  return (
    <section className={`scroll-area ${nameOfArea}`}
      id={`${nameOfArea}`}
      style={{backgroundColor: `${backgroundColorHandler()}`}}
    >
        <span className="scroll-area btn">
          <i className="fas fa-angle-double-down"></i>
        </span>
    </section>
  )
}

export default ScrollArea;
