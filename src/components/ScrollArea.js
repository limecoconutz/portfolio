import ScrollAreaInfos from "./ScrollAreaInfos";

function ScrollArea({areaNumber, backgroundColorHandler}) {
  const nameOfArea = `area_${areaNumber}`;

  return (
    <section className={`scroll-area ${nameOfArea}`}
      id={`${nameOfArea}`}
      style={{backgroundColor: `${backgroundColorHandler()}`}}
    >
        <ScrollAreaInfos/>
        <span className="scroll-area btn">
          <i className="fas fa-angle-double-down"></i>
        </span>
    </section>
  )
}

export default ScrollArea;