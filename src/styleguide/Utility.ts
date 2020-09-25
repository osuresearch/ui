
import { ExtendedRsgSection } from './StyleGuide';

/** Wraps a string in angle brackets */
export const WrapNameInBrackets = (name?: string) => name ? `<${name}>` : undefined;

/** Formats Styleguide subcomponents when they meet certain requirements */
export const FormatSubcomponents = (sections: ExtendedRsgSection[]) => {
    sections.forEach(section => {
        if (section.hasSubcomponents) {
            section.components?.forEach(function (component) {
                // @ts-ignore - TS doesn't understand that we're
                // using `this` in scope of the forEach `thisArg`
                const section = this;

                // Add a dot between the section name and the
                // component name
                component.visibleName = `${section.name}.${component.name}`

                // Wrap the visible name of the component in
                // angle brackets
                if (section.wrapNamesInBrackets) {
                    component.visibleName = WrapNameInBrackets(component.visibleName)
                }

                // Remove the component's visible name if it 
                // matches the section name
                if (section.name === component.name) {
                    component.visibleName = undefined
                }
            }, section);
        }

        if (section.wrapNamesInBrackets) {
            section.visibleName = WrapNameInBrackets(section.name)
        }

        // Continue down the section tree
        if (section.sections) {
            FormatSubcomponents(section.sections);
        }
    })
}