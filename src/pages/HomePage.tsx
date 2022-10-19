import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { styled } from 'styletron-react';
import Swiper from '../ui/Swiper';

interface HomePageProps extends RouteComponentProps {

}

type Props = HomePageProps;

const Container = styled('div', {
  
});

const StyledSwiper = styled(Swiper, {
  height: '100px',
  width: '100%',
  backgroundColor: 'white',
});

class HomePage extends React.Component<Props> {
  render() {
    return (
      <Container>
        <StyledSwiper pages={[{
          component: () => <div>Page 1</div>,
          props: {},
        }]} />
      </Container>
    );
  }
}

export default HomePage;