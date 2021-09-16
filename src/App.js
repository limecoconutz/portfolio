import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import '../src/stylesheets/App.scss';
import './stylesheets/App.scss';
import Footer from  './components/Footer';
import AboutPage from  './pages/AboutPage';
import LandingPage from './pages/LandingPage';
import MyProjectsPage from './pages/MyProjectsPage';
import SkillsPage from './pages/SkillsPage';
import Sidebar from './components/Sidebar';


function App() {
  return (
      <div className="App">
      <a className="" href="/"><i className="logo logo-bright fas fa-fan"></i></a>
          <Router>
            <Switch>
              <Route path="/about" component={AboutPage} />
              <Route path="/" exact component={LandingPage} />
              <Route path="/myprojects" component={MyProjectsPage} />
              <Route path="/skills" component={SkillsPage} />
            </Switch>
            <Sidebar />
          </Router>
        <Footer />
      </div>

  );
}

export default App;
