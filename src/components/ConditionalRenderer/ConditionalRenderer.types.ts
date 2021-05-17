export interface ConditionalRendererPropTypes {
  condition: unknown;
  onSuccess: () => JSX.Element;
  onFailure?: () => JSX.Element;
}
