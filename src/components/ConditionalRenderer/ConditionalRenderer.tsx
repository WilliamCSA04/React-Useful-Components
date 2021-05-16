import React from 'react';

/**
 * Component that renders different components based on its condition prop.
 */
export const ConditionalRenderer = (props: ConditionalRendererPropTypes) => {
  const { condition, onSuccess, onFailure = () => null } = props;
  if(condition) {
    return <>{onSuccess()}</>
  } else {
    return <>{onFailure()}</>
  }
}

export default ConditionalRenderer;
