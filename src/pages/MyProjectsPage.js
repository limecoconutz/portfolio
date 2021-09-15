import MyProjects from "../data/myProjects";
import ProjectCard from "../components/ProjectCard";
import '../stylesheets/pages/MyProjectsPage.scss';
import Slider from "react-slick";


// import { Carousel } from "react-bootstrap";
// import 'react-multi-carousel/lib/styles.css';

function MyProjectsPage() {
      const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      speed: 500
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
