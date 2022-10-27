
import React from 'react';
import renderer from 'react-test-renderer';
import Course from "../components/Course";

// test('renders correctly', () => {
//     const tree = renderer.create(<Course />).toJSON();
//     expect(tree).toMatchSnapshot();
// });
it('renders correctly', () => {
    const tree = renderer
        .create(<Course />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});