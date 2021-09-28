import {NavLink} from 'react-router-dom';
import '../stylesheets/components/Sidebar.scss';

function Sidebar() {
  return (
        <nav className="Sidebar">
          <ul className="nav-links list">
            <NavLink to='portfolio' exact className="nav-link" activeClassName="selected">
                <li className="list__elem text__bright"><i className="fas fa-fan"></i></li>
              </NavLink>
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
  );
}

export default Sidebar;
