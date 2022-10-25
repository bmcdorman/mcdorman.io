import * as React from 'react';
import { styled } from 'styletron-react';
import { StyleProps } from '../style';

export const Container = styled('div', {
  borderRadius: '0.5rem',
  border: '1px solid #ccc',
  backgroundColor: 'rgb(255, 255, 255)',
});

export interface PageProps extends StyleProps {
  title?: string;
  children?: any;
}

type Props = PageProps;

class Page extends React.Component<Props> {
  private oldTitle_: string;

  private static setTitle_ = (title?: string) => {
    if (!title) return;
    document.title = `${title} - Braden McDorman`;
  };
  
  componentDidMount() {
    this.oldTitle_ = document.title;
    Page.setTitle_(this.props.title);
  }

  componentWillUnmount() {
    document.title = this.oldTitle_;
  }

  componentDidUpdate(prevProps: Readonly<PageProps>) {
    if (prevProps.title !== this.props.title) {
      Page.setTitle_(this.props.title);
    }
  }

  render() {
    const { props } = this;

    const {
      style,
      className,
      children
    } = props;

    return (
      <Container
        style={style}
        className={className}
      >
        {children}
      </Container>
    );
  }
}

export default Page;