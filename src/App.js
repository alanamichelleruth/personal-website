import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ResponsiveNavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import NotWorkPage from './pages/NotWorkPage';
import BlogPage from './pages/BlogPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <Router>
        <ResponsiveNavBar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/work" component={WorkPage} exact />
          <Route path="/!work" component={NotWorkPage} exact />
          <Route path="/blog" component={BlogPage} exact />
          <Route component={NotFoundPage} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
