import React from 'react'
import AlertWindow from './AlertWindow';
import { create } from 'react-test-renderer';

describe("Alert window is rendered", () => {
    let alertModal = create(<AlertWindow message="Test" />)
    let instance = alertModal.root;
    let p = instance.findByType("p");

    test('with message', () => {
        expect(p.children).not.toBeNull();
    })

    test('with correct message', () => {
        expect(p.props.children).toBe("Test");
    })
})



