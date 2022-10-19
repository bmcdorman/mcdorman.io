import * as React from 'react';

interface Component<P = {}> {
  component: React.ComponentType<React.Attributes & P> | React.FunctionComponent<P>;
  props: React.Attributes & P;
}

namespace Component {
  export const create = <P extends {}>(component: React.ComponentType<React.Attributes & P> | React.FunctionComponent<P>, props: React.Attributes & P): Component<P> => ({
    component,
    props: props,
  });

  export const render = <P extends {}>(component: Component<P>, additionalProps?: React.Attributes & P): JSX.Element => {
    const { component: Component, props } = component;
    const allProps = { ...props, ...additionalProps };
    return <Component  {...allProps} />;
  };
}

export default Component;