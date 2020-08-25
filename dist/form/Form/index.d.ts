import React from 'react';
import { GroupProps } from './Group';
import { RowProps } from './Row';
declare type Props = React.FormHTMLAttributes<HTMLFormElement> & {
    isDiff?: boolean;
    isPrint?: boolean;
};
interface IFormComposition {
    /**
     * Each section of a `<Form>` should be wrapped in a
     * `<Form.Group>`. Typically, a `<Form.Group>` will contain
     * a single form component.
     */
    Group: React.FC<GroupProps>;
    /**
     * Wrap multiple `<Form.Group>` components in a `<Form.Row>`
     * if
     * they use the [Bootstrap layout column classes](https://getbootstrap.com/docs/4.0/layout/grid/#responsive-classes)
     */
    Row: React.FC<RowProps>;
}
/**
 * (Somewhat) self-explanatory form container
 *
 * In addition to [native `<form>` attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#Attributes) and
 * [React event handlers](https://reactjs.org/docs/events.html#supported-events), `<Form>` takes two optional boolean
 * form display props:
 * * `isDiff` – Display the form fields as a Diff
 * * `isPrint` – Display the form fields for printing
 *
 * ### Subcomponents
 * #### `<Form.Group>` (required)
 * Each section of a `<Form>` should be wrapped in a
 * `<Form.Group>`. Typically, a `<Form.Group>` will contain
 * a single form component.
 *
 * **Note** – A group of checkboxes or radios should be wrapped
 * in a `<FieldSet>` within a `<Form.Group>`
 *
 * #### `<Form.Row>`
 * Wrap multiple `<Form.Group>` components in a `<Form.Row>` if
 * they use the [Bootstrap layout column classes](https://getbootstrap.com/docs/4.0/layout/grid/#responsive-classes)
 *
 */
declare const Form: React.FC<Props> & IFormComposition;
export default Form;
//# sourceMappingURL=index.d.ts.map