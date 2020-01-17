import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Dashboard from '../dashboard/Dashboard';

// Test away!
test('locked toggle button displays unlock after unlocked gate is locked', () => {
    const { getByText, findByText } = render(<Dashboard locked={false} />);
    act(() => {
        fireEvent.click(getByText('Lock Gate'));
    });
    findByText(/unlock/i);
});

test('locked toggle button is disabled if gate is open, closed toggle button is disabled if gate is locked', () => {
    const { getByText, findByText } = render(<Dashboard locked={false} closed={false} />);
    expect(getByText(/lock gate/i).disabled).toBe(true);
    act(() => {
        fireEvent.click(getByText('Close Gate'));
    });
    act(() => {
        fireEvent.click(getByText('Lock Gate'));
    });
    expect(getByText(/open gate/i).disabled).toBe(true);
});