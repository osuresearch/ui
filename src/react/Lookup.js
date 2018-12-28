
import React from 'react';
import PropTypes from 'prop-types';

// Non-React component inclusion, since this 
// is just a wrapper around $.Lookup for now
import '../js/components/lookup';

/**
 * React Wrapper for ORIS/Lookup
 *
 * Usage:
 * ```jsx
 *  <fieldset class="form-group">
 *      <label for="lookup-sample">Example Lookup</label>
 *
 *      <Lookup id="lookup-sample"
 *          endpoint="https://path/to/endpoint"
 *          value="McManning, Chase"
 *          valueKey="200275154"
 *          onChange={this.onChange}
 *          onClear={this.onClear} />
 *  </fieldset>
 * ```
 * 
 * There are two methods for using the value key in React:
 * 
 * 1. Have a bind to the onChange event extract the key from the JSON payload (second argument)
 * 2. Make a reference to the Lookup and access the `valueKey` property. Eg:
 * 
 * ```jsx
 *  render() {
 *      return (
 *          <Lookup ref={this.lookup} ... />
 *      );
 *  }
 * 
 *  doSomethingWithKey() {
 *      const key = this.lookup.valueKey;
 *      ...
 *  }
 * ```
 */
class Lookup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
            valueKey: this.props.valueKey
        };

        this.ref = React.createRef();
        this.uid = (props.name || 'lookup-') + Math.floor(Math.random() * 1000);
    }

    componentDidMount() {
        // Wrap the jQuery component and initialize additional parameters
        this.$el = $(this.ref.current);

        this.$el.Lookup({
            endpoint: this.props.endpoint,
            token: this.props.token,
            query: this.props.query,
            readonly: this.props.readonly,
            display: this.props.display,
            optionDisplay: this.props.optionDisplay,
            key: this.props.selectionKey
        });

        // Setup callback delegates
        if (this.props.onChange) {
            this.$el.on('pick.lookup', this.props.onChange);
        }

        if (this.props.onClear) {
            this.$el.on('clear.lookup', this.props.onClear);
        }
    }

    /**
     * Return the current input value as a string
     *
     * @return {string}
     */
    get value() {
        return this.$el.Lookup('displayValue');
    }

    /**
     * Return the current stored hidden value associated with `value`
     *
     * @return {string}
     */
    get valueKey() {
        return this.$el.Lookup('keyValue');
    }

    render() {
        const { name } = this.props;
        const { value, valueKey } = this.state;

        return (
            <div className="input-group">
                <span className="input-group-prefix">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </span>

                <input type="text" className="form-control"
                    autoComplete="off" id={this.uid} name={name}
                    aria-autocomplete="list" aria-haspopup="true"
                    defaultValue={value} ref={this.ref} />

                <input type="hidden" name={name + '-key'} defaultValue={valueKey} />

                <span className="input-group-suffix">
                    {this.props.hasClearButton &&
                        <button className="btn btn-secondary lookup-clear" type="button"
                            aria-label="clear selection">Clear</button>
                    }
                    {this.props.children}
                </span>
            </div>
        );
    }
}

Lookup.propTypes = {
    /**
     * Lookup field name. The hidden key field will be
     * set to this value + '-key'
     */
    name: PropTypes.string.isRequired,

    /**
     * Lookup field ID. If not supplied, one will
     * be automatically generated internally.
     */
    id: PropTypes.string,

    /**
     * API endpoint to query for results
     */
    endpoint: PropTypes.string.isRequired,

    /**
     * API authentication token to send to the endpoint
     * as part of the `Authorization` header
     */
    token: PropTypes.string,

    /**
     * Additional query parameters passed to the
     * endpoint as key-value pairs.
     */
    query: PropTypes.object,

    /**
     * Whether to go readonly once something is selected
     */
    readonly: PropTypes.bool,

    /**
     * JSON object attribute to display on select.
     *
     * May be a string pointing to a nested attribute, or func
     */
    display: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ]),

    /**
     * JSON object attribute to display in the dropdown
     *
     * May be a string pointing to a nested attribute, or func
     */
    optionDisplay: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ]),

    /**
     * Default value to fill the lookup
     * (makes it readonly until the user clears it)
     */
    value: PropTypes.string,

    /**
     * Hidden key value to associate with `value`
     */
    valueKey: PropTypes.string,

    /**
     * JSON field used to populate the hidden key field
     */
    selectionKey: PropTypes.string,

    /**
     * Called when a result is clicked.
     * Wrapper to ORIS/Lookup's `pick.lookup` event
     */
    onChange: PropTypes.func,

    /**
     * CAlled when the selection is cleared.
     * Wrapper to ORIS/Lookup's `clear.lookup` event
     */
    onClear: PropTypes.func,

    /**
     * Whether or not to display the clear button when a selection is made
     */
    hasClearButton: PropTypes.bool,

    /**
     * Additional DOM children to add to the input suffix.
     * These are typically additional buttons for lookup controls
     */
    children: PropTypes.node
};

Lookup.defaultProps = {
    id: '',
    endpoint: null,
    token: null,
    query: {},
    readonly: true,
    display: 'attributes.name',
    optionDisplay: 'attributes.name',
    value: '',
    valueKey: '',
    selectionKey: 'id',
    onChange: null,
    onClear: null,
    hasClearButton: true
};

export default Lookup;
