import * as React from 'react';
import { Route, Switch } from 'react-router';
import { styled } from 'styletron-react';
import CompanyPage from './pages/CompanyPage';
import DynamicBackground from './ui/DynamicBackground';
import Footer from './Footer';
import NotFound from './pages/NotFoundPage';
import ProjectPage from './pages/ProjectPage';
import ResumePage from './pages/ResumePage';
import Top from './Top';
import HomePage from './pages/HomePage';
import RolePage from './pages/RolePage';
import SchoolPage from './pages/SchoolPage';
import StaticResumePage from './pages/StaticResumePage';
import ScrollToTop from './ui/ScrollToTop';

interface AppProps {

}

const Container = styled('div', {
  position: 'relative',
  width: '1024px',
  '@media screen and (max-width: 1024px)': {
    width: '100%',
  },
  margin: '0 auto',
  padding: '1rem'
});

class App extends React.Component {
  render() {
    return (
      <Container>
        <DynamicBackground />
        <Top />
        <ScrollToTop>
          <Switch>
            <Route path='/company/:id' component={CompanyPage} />
            <Route path='/school/:id' component={SchoolPage} />
            <Route path='/project/:id' component={ProjectPage} />
            <Route path='/role/:id' component={RolePage} />
            <Route path='/resume' component={ResumePage} />
            <Route path="/" component={ResumePage} />
            <Route component={NotFound} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Container>
    );
  }
}

export default App;