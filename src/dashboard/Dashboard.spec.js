import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';

// Test away
describe('<Dashboard />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<Dashboard />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});