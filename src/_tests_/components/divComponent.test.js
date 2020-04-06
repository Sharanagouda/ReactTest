import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DivComponent from '../../components/divComponent/index';

configure({
    adapter: new Adapter()
});
describe('A suite', function () {
    it('should render without throwing an error', function () {
        expect(shallow(<DivComponent />).contains(<div className="foo">Bar</div>)).toBe(true);
    });

    it('should be selectable by class "foo"', function () {
        expect(shallow(<DivComponent />).is('.foo')).toBe(true);
    });

    it('should mount in a full DOM', function () {
        expect(mount(<DivComponent />).find('.foo').length).toBe(1);
    });

    it('should render to static HTML', function () {
        expect(render(<DivComponent />).text()).toEqual('Bar');
    });
});