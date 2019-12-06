import React from "react";
import renderer from "react-test-renderer";
import CounterApp, {Counter, dataReducer} from "./Counter";
import {mount} from "enzyme";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});
describe('CounterApp', () => {
    it("SnapShot renders", () =>{
        const component = renderer.create(<CounterApp />);
        let tree =component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe("Counter", () => {
    test("Snapshot renders", () =>{
        const component = renderer.create(<Counter />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
});
const list = ['a', 'b', 'c'];
describe("CounterApp ", () => {
    describe('Reducer', () => {
        it('should set a list ', () => {
            const state = { list: [], error:null };
            const newState = dataReducer(state, {
                type: 'SET_LIST',
                list,
            });
            expect(newState).toEqual({list, error: null});
        });
        it(" should reset the error if list is set",  () => {
            const state = {list: [], error: true};
            const newState = dataReducer(state, {
                type: "SET_LIST",
                list,
            });
            expect(newState).toEqual({list, error:null});
        });
        it("should set the error", () => {
            const state = {list: [], error: null};
            const newState =  dataReducer(state, {
                type: "SET_ERROR",
            });
            expect(newState.error).toBeTruthy();
        });
    });
});

describe("CounterApp", () => {
    it("renders the inner counter component length  ", () => {
        const wrapper = mount(<CounterApp/>);
        expect(wrapper.find(Counter).length).toEqual(1);
    });
    it("passes all props to counter ", () => {
        const wrapper = mount(<CounterApp/>);
        const counterWrapper = wrapper.find(Counter);
        expect(counterWrapper.find('p').text()).toEqual('0');
    })
})