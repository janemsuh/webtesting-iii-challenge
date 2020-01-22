import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

// Test away!
test('gate is open and unlocked', () => {
    const { getByText } = render(<Display closed={false} locked={false} />);
    const openGate = getByText(/open/i);
    const unlockedGate = getByText(/unlocked/i);
    expect(openGate.classList.contains('green-led')).toBe(true);
    expect(unlockedGate.classList.contains('green-led')).toBe(true);
});

test('gate is closed and locked', () => {
    const { getByText } = render(<Display closed={true} locked={true} />);
    const closedGate = getByText(/closed/i);
    const lockedGate = getByText(/locked/i);
    expect(closedGate.classList.contains('red-led')).toBe(true);
    expect(lockedGate.classList.contains('red-led')).toBe(true);
});

test('gate is closed and unlocked', () => {
    const { getByText } = render(<Display closed={true} locked={false} />);
    const closedGate = getByText(/closed/i);
    const unlockedGate = getByText(/unlocked/i);
    expect(closedGate.classList.contains('red-led')).toBe(true);
    expect(unlockedGate.classList.contains('green-led')).toBe(true);
});