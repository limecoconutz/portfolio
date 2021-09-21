import MyProjects from "../data/myProjects";
import ProjectCard from "../components/ProjectCard";
import '../stylesheets/pages/MyProjectsPage.scss';
import Slider from "react-slick";

function MyProjectsPage() {
      const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      // fade: true,
      centerPadding: "60px",
      slidesToShow: 2,
      speed: 500,
      dots: true,
      appendDots: dots => (
        <div
          style={{}}
        >
          <ul style={{ margin: "0px"}}> {dots} </ul>
        </div>
      ),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
  return (
       <div className="MyProjectsPage">
         <Slider {...settings}>
         {MyProjects.map(website=>(
           <ProjectCard website={website} key={website.id}/>
         ))}
         </Slider>
       </div>
  )
}

export default MyProjectsPage;
