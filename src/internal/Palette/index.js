
import React from 'react';
import PropTypes from 'prop-types';

class Palette extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            className: this.getColorClassName('', 0),
            sass: this.getColorSass('', 0)
        };
    }

    getColorClassName(tintOrShade, level) {
        // Illegal tint
        if (tintOrShade === 'tint' && !this.props.tints.includes(level)) {
            return 'disabled';
        }

        // Illegal shade
        if (tintOrShade === 'shade' && !this.props.shades.includes(level)) {
            return 'disabled';
        }

        let className = 'brand-' + this.props.color;
        if (tintOrShade !== '') {
            className += '-' + tintOrShade;
        }

        if (level !== 0) {
            className += '-' + level;
        }

        return className;
    }

    getColorSass(tintOrShade, level) {
        if (tintOrShade === '') {
            return `$${this.props.color}`;
        }

        return `${tintOrShade}($${this.props.color}, ${level}%)`;
    }

    onClick(tintOrShade, level) {
        this.setState({
            className: this.getColorClassName(tintOrShade, level),
            sass: this.getColorSass(tintOrShade, level)
        })
    }

    getColorLink(tintOrShade, level) {
        const className = this.getColorClassName(tintOrShade, level);
        if (className === 'disabled') {
            return <button className={className}>.</button>;
        }

        return (
            <button className={className} onClick={() => this.onClick(tintOrShade, level)}>
                {level || '.'}
            </button>
        );
    }

    render() {
        const { className, sass } = this.state;
        const colors = [];

        // Add tints
        for (let i = 10; i < 100; i += 10) {
            colors.push(this.getColorLink('tint', i));
        }

        // Add base color
        colors.push(this.getColorLink('', 0));

        // Add shades
        for (let i = 10; i < 100; i += 10) {
            colors.push(this.getColorLink('shade', i));
        }

        // Print preview
        return (
            <div className="palette">
                <div className="palette-links">
                    {colors}
                </div>
                <div className={`palette-example ${className}`}>
                    {sass}
                </div>
            </div>
        )
    }
}

Palette.propTypes = {
    color: PropTypes.string.isRequired,
    tints: PropTypes.arrayOf(PropTypes.number).isRequired,
    shades: PropTypes.arrayOf(PropTypes.number).isRequired
}

Palette.defaultProps = {
    color: 'gray',
    tints: [10, 20, 30, 40, 50, 60, 70, 80, 90],
    shades: [10, 20, 30, 40, 50, 60, 70, 80, 90]
}

export default Palette;
