import React, { useState } from 'react';
import clsx from 'clsx';

// import Icon from 'components/Icon/Icon.component';
// Changeset test here
import {
    Props,
    propTypes,
    defaultProps,
    paddingProps,
    horizontalPaddingProps,
    verticalPaddingProps,
} from './Accordion.types';

import styles from './Accordion.module.scss';

const setHorizontalPadding = (
    padding: paddingProps,
): horizontalPaddingProps => {
    const paddingArray = padding.map((value) => {
        return `${value}px`;
    });
    if (paddingArray.length === 1) {
        return { paddingRight: paddingArray[0], paddingLeft: paddingArray[0] };
    } else if (paddingArray.length === 2 || paddingArray.length === 3) {
        return { paddingRight: paddingArray[1], paddingLeft: paddingArray[1] };
    }

    return { paddingRight: paddingArray[1], paddingLeft: paddingArray[3] };
};

const setVerticalPadding = (padding: paddingProps): verticalPaddingProps => {
    const paddingArray = padding.map((value) => {
        return `${value}px`;
    });
    if (paddingArray.length === 1) {
        return {};
    } else if (paddingArray.length === 2) {
        return { paddingTop: paddingArray[0], paddingBottom: paddingArray[0] };
    }

    return { paddingTop: paddingArray[0], paddingBottom: paddingArray[2] };
};

export function Accordion(props: Props): JSX.Element {
    const {
        className,
        title,
        children,
        padding,
        previewComponent,
        'data-testid': dataTestId,
    } = props;

    const [expanded, setExpanded] = useState<boolean>(false);

    const toggle = (): void => { setExpanded((prevState) => !prevState); };

    const getExternalPadding = Array.isArray(padding)
        ? setHorizontalPadding(padding)
        : setHorizontalPadding([padding]);
    const getInternalPadding = Array.isArray(padding)
        ? setVerticalPadding(padding)
        : {};

    return (
        <div
            className={clsx(styles.AccordionContainer, className)}
            data-testid={`${dataTestId}-wrapper`}
            style={getExternalPadding}
        >
            <div
                className={styles.Accordion}
                data-testid={dataTestId}
                style={getInternalPadding}
            >
                <div className={styles.Accordion_title} onClick={toggle}>
                    <div className={styles.Title}>{title}</div>
                    {/*<Icon*/}
                    {/*    alt={alt || (expanded ? 'Collapse' : 'Expand')}*/}
                    {/*    color={iconColor}*/}
                    {/*    name={expanded ? 'ChevronUpIcon' : 'ChevronDownIcon'}*/}
                    {/*    size={30}*/}
                    {/*/>*/}
                </div>
                {previewComponent ? <div className={styles.Accordion_preview} onClick={toggle}>
                        {typeof previewComponent === 'function'
                            ? previewComponent()
                            : previewComponent}
                    </div> : null}
                {expanded ? <div className={styles.Accordion_body}>{children}</div> : null}
            </div>
        </div>
    );
}

Accordion.displayName = 'Accordion';
Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;

export default Accordion;
