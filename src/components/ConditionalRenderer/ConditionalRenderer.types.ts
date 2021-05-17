/**
 * @interface ConditionalRendererPropTypes
 * @param condition Receives a truthy or falsy value
 * @param onSuccess JSX function that executes if condition has a truthy value
 * @param onFailure JSX function that executes if condition has a truthy falsy
 */
export interface ConditionalRendererPropTypes {
  condition: unknown;
  onSuccess: () => JSX.Element;
  onFailure?: () => JSX.Element;
}
