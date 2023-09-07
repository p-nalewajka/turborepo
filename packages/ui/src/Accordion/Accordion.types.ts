import PropTypes from 'prop-types';
import React from 'react';

import colors from 'node:util/colors';

export type paddingProps = [number?, number?, number?, number?];

export interface Props {
    /** A className to override styling */
    className?: string;
    /** Text for the title */
    title: string;
    /** Alt text for the icon, required for accessibility.*/
    alt?: string;
    /** A node that will be rendered in expanded accordion */
    children: React.ReactNode;
    /** Color of the accordion icon */
    iconColor?: string;
    /** Test id for targeting accordion element. */
    'data-testid'?: string;
    /** Responsible for rendering items under the title component */
    previewComponent?: React.ReactNode | (() => React.ReactNode);
    /** Horizontal padding for container in pixels. Can be overridden by array of values for each side of padding. */
    padding?: number | paddingProps; // Array type should removed in the future
}

export const propTypes = {
    className: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    iconColor: PropTypes.string,
    'data-testid': PropTypes.string,
    previewComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    padding: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number),
    ]),
};

export const defaultProps = {
    alt: '',
    className: '',
    iconColor: colors.black,
    'data-testid': 'accordion',
    padding: 0,
};

export interface horizontalPaddingProps {
    paddingLeft?: string | number;
    paddingRight?: string | number;
}

export interface verticalPaddingProps {
    paddingTop?: string | number;
    paddingBottom?: string | number;
}
