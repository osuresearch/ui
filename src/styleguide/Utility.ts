
import { ExtendedRsgSection } from './StyleGuide';

/** Wraps a string in angle brackets */
export const WrapNameInBrackets = (name?: string) => name ? `<${name}>` : undefined;

/** Formats Styleguide subcomponents when they meet certain requirements */
export const FormatSubcomponents = (sections: ExtendedRsgSection[]) => {
    sections.forEach(section => {
        section.components?.forEach(function (component) {
            // @ts-ignore - TS doesn't understand that we're
            // using `this` in scope of the forEach `thisArg`
            const section = this;

            // Add a dot between the section name and the
            // component name
            if (section.hasSubcomponents) {
                component.visibleName = `${section.name}.${component.name}`;
            }

            // Wrap the visible name of the component in
            // angle brackets
            if (section.wrapComponentNamesInBrackets) {
                component.visibleName = WrapNameInBrackets(component.visibleName);
            }

            // Remove the component's visible name if it 
            // matches the section name
            if (section.name === component.name) {
                component.visibleName = undefined
            }
        }, section);

        // Wrap the section name in angle brackets
        if (section.wrapSectionNameInBrackets) {
            section.visibleName = WrapNameInBrackets(section.visibleName);
        }

        // Remove the section visible name if it is empty (for the introductory section)
        if (section.name?.trim().length === 0) {
            section.visibleName = undefined;
        }

        // Continue down the section tree
        if (section.sections) {
            FormatSubcomponents(section.sections);
        }
    })
}