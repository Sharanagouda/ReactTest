import React from 'react';
import { shallow } from 'enzyme';
import HeaderOne from '../../components/headerOne';

test('should test Header component', () => {
    const wrapper = shallow(<HeaderOne />);
    expect(wrapper).toMatchSnapshot();
});