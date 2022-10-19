import * as React from 'react';
import { styled } from 'styletron-react';
import Component from '../Component';
import Vector2 from '../math/Vector2';
import { StyleProps } from '../style';

import resizeListener, { ResizeListener } from '../util/resizeListener';

const Container = styled('div', {
  position: 'relative',
  overflow: 'hidden',
});

const InnerContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'absolute',
  top: 0,
});

class Swiper extends React.Component<Swiper.Props, Swiper.State> {
  constructor(props: Swiper.Props) {
    super(props);

    this.state = {
      currentPage: 0,
      width: 0,
    };
  }

  private onResize_ = (size: Vector2) => {
    this.setState({
      width: size.x,
    });
  };

  private listener_ = resizeListener(this.onResize_);

  private containerRef_: HTMLDivElement;
  private bindContainerRef_ = (ref: HTMLDivElement) => {
    if (this.containerRef_) this.listener_.unobserve(this.containerRef_);
    this.containerRef_ = ref;
    if (this.containerRef_) this.listener_.observe(this.containerRef_);
  }

  componentWillUnmount() {
    this.listener_.disconnect();
  }

  render() {
    const { props, state } = this;
    const { className, style, pages } = props;
    const { width } = state;

    const pageElements = pages.map((page, i) => Component.render(page, {
      key: i,
      style: {
        maxWidth: `${width}px`,
        minWidth: `${width}px`,
        width: `${width}px`,
        height: '100%'
      },
    }));

    return (
      <Container
        className={className}
        style={style}
        ref={this.bindContainerRef_}
      >
        <InnerContainer>
          {pageElements}
        </InnerContainer>
      </Container>
    );
  }
}

namespace Swiper {
  export interface Props extends StyleProps {
    pages: Component<StyleProps>[];
  }

  export interface State {
    width: number;
    currentPage: number;
  }
}

export default Swiper;