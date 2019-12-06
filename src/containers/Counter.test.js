import React from "react";
import renderer from "react-test-renderer";

import CounterApp, {Counter, dataReducer} from "./Counter";

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
})