import '../stylesheets/components/Footer.scss';

function Footer() {
  return (
    <div className="Footer">
        <a href="https://www.linkedin.com/in/cosmina-iosifescu/" target="_blank" rel="noreferrer" className="link">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/limecoconutz" target="_blank" rel="noreferrer" className="link">
          <i className="fab fa-github"></i>
        </a>
        <p className='text text__bright'>image credit: https://www.uhdpaper.com/</p>
    </div>
  );
}

export default Footer;
