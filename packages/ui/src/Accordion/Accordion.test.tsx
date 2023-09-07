import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Accordion from 'ui';

const titleText = 'Title text';
const childrenText = 'Children text';

describe('Accordion', () => {
    it('renders', () => {
        render(<Accordion title={titleText}>{childrenText}</Accordion>);
    });
    it('Hide children by default', () => {
        const { queryByText } = render(
            <Accordion title={titleText}>{childrenText}</Accordion>,
        );

        expect(queryByText(childrenText)).not.toBeInTheDocument();
    });
    it('Render plain text on click', () => {
        const { queryByText, getByText } = render(
            <Accordion title={titleText}>{childrenText}</Accordion>,
        );

        getByText(titleText).click();

        expect(queryByText(childrenText)).toBeInTheDocument();
    });
    it('Render react node on click', () => {
        const { getByTestId, getByText } = render(
            <Accordion title={titleText}>
                <div data-testid="node">React node</div>
            </Accordion>,
        );

        getByText(titleText).click();

        expect(getByTestId('node')).toBeInTheDocument();
    });

    it('Render with iconColor', () => {
        const { getByTitle } = render(
            <Accordion
                alt="an alt"
                iconColor="rgb(255, 255, 255)"
                title={titleText}
            >
                {childrenText}
            </Accordion>,
        );
        const svgTag = getByTitle('an alt');
        expect(svgTag.style.color).toBe('rgb(255, 255, 255)');
    });

    it('Render with previewComponent', () => {
        const { getByText } = render(
            <Accordion
                previewComponent={<div>Test preview</div>}
                title={titleText}
            >
                {childrenText}
            </Accordion>,
        );
        const preview = getByText('Test preview');
        expect(preview).toBeInTheDocument();
    });

    it('Render with padding prop', () => {
        const { getByTestId } = render(
            <Accordion data-testid="TestId" padding={20} title={titleText}>
                {childrenText}
            </Accordion>,
        );

        expect(getByTestId('TestId-wrapper').style.paddingLeft).toBe('20px');
        expect(getByTestId('TestId-wrapper').style.paddingRight).toBe('20px');
    });

    it('Render with padding array prop', () => {
        const { getByTestId } = render(
            <Accordion
                data-testid="TestId"
                padding={[5, 10, 15, 20]}
                title={titleText}
            >
                {childrenText}
            </Accordion>,
        );
        expect(getByTestId('TestId').style.paddingTop).toBe('5px');
        expect(getByTestId('TestId-wrapper').style.paddingRight).toBe('10px');
        expect(getByTestId('TestId').style.paddingBottom).toBe('15px');
        expect(getByTestId('TestId-wrapper').style.paddingLeft).toBe('20px');
    });
});
