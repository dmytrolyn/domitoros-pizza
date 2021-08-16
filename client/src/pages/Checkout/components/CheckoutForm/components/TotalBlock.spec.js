import React from 'react';
import { create } from 'react-test-renderer';

import TotalBlock from './TotalBlock'

describe('TotalBlock', () => {
    const defaultProps = {
        total: 1200
    }
    const wrapper = create(<TotalBlock {...defaultProps} />);
    let instance = wrapper.root;

    test('should be rendered with passed total value', () => {
        let totalBlock = instance.findByProps({ className: "checkout-form__total-price" });
        expect(totalBlock.props.children[0]).toBe(defaultProps.total);
    })
})
