import {NavLink} from 'react-router-dom';
import '../stylesheets/components/Sidebar.scss';

function Sidebar() {
  return (
  <section className="sidebar">
        <nav className="Sidebar">
          <ul className="nav-links list"> 
            <NavLink to='MyProjects' exact className="nav-link" activeClassName="selected">
                <li className="list__elem title text__bright">My Projects</li>
              </NavLink>
              <NavLink to='/skills' className="nav-link" activeClassName="selected">
                <li className="list__elem title text__bright">My Skills</li>
              </NavLink>
              <NavLink to='/about' className="nav-link" activeClassName="selected">
                <li className="list__elem title text__bright">About</li>
              </NavLink>
            </ul>
        </nav>
    </section>
  );
}

export default Sidebar;
