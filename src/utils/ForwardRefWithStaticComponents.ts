/**
 * Wrap a component to support a polymorphic DOM element
 *
 * @author Mantine.dev <https://github.com/mantinedev/mantine>
 */
export type ForwardRefWithStaticComponents<
  Props extends Record<string, any>,
  Static extends Record<string, any>
> = ((props: Props) => React.ReactElement) & Static;
