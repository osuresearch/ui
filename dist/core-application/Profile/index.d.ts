export default Profile;
/**
 * Provides a dropdown for the logged in user to update their profile or logout.
 *
 * Typically rendered within the `Navbar` of an application.
 *
 * @deprecated Use `@oris/auth`. Will be removed in `@oris/ui^5.0`
 */
declare function Profile(props: any): JSX.Element;
declare namespace Profile {
    export namespace propTypes {
        export const username: PropTypes.Validator<string>;
        export const shibbolethLogoutUrl: PropTypes.Validator<string>;
        export const editProfileUrl: PropTypes.Validator<string>;
        export const children: PropTypes.Requireable<object>;
    }
    export namespace defaultProps {
        const shibbolethLogoutUrl_1: string;
        export { shibbolethLogoutUrl_1 as shibbolethLogoutUrl };
        const editProfileUrl_1: string;
        export { editProfileUrl_1 as editProfileUrl };
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map