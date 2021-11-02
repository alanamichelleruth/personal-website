import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ResponsiveNavBar from './header/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import InterestsPage from './pages/InterestsPage';
// import BlogPage from './pages/BlogPage';
import NotFoundPage from './pages/NotFoundPage';
import ContactMe from './footer/ContactMeModal';
import ScrollToTop from './footer/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ResponsiveNavBar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/work" component={WorkPage} exact />
          <Route path="/interests" component={InterestsPage} exact />
          {/* <Route path="/blog" component={BlogPage} exact /> */}
          <Route component={NotFoundPage} exact />
        </Switch>
      </Router>
      <ContactMe />
      <ScrollToTop />
    </>
  );
}

export default App;
