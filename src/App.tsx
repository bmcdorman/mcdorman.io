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

interface AppProps {

}

const Container = styled('div', {
  width: '100%',
  position: 'relative'
});

class App extends React.Component {
  render() {
    return (
      <Container>
        <Top />
        <Switch>
          <Route path='#/company/:id' component={CompanyPage} />
          <Route path='#/school/:id' component={SchoolPage} />
          <Route path='#/project/:id' component={ProjectPage} />
          <Route path='#/role/:id' component={RolePage} />
          <Route path='#/resume' component={ResumePage} />
          <Route path="/" component={HomePage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Container>
    );
  }
}

export default App;