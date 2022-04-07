/* globals describe, test jest, afterEach expect */

import { renderHook, act } from '@testing-library/react-hooks';
import { cleanup } from 'react-testing-library';
import { initialState } from '@infra/reducers';
import useCustomReducer from '../useCustomReducer';

afterEach(cleanup);

describe('useReducer tests', () => {
    test('Passing a reference of the action, useReducer should have an undefined state and call the action, then dispatch can be called inside action function', () => {
        const reducer = jest.fn();
        const action = jest.fn();
        const { result: { current: [state, dispatch] } } = renderHook(() => useCustomReducer(reducer, reducer()));
        const callback = jest.fn(() => dispatch(action()));
        expect(state).toBeUndefined();
        dispatch(callback)
            .then(() => {
                expect(callback).toBeCalled();
                expect(action).toBeCalled();
            });
    });

    test('Passing the action and an initial state, useReducer should perform it and change the state', () => {
        const action = jest.fn(newValue => ({ type: 'ACTION', payload: newValue }));
        const reducer = (state = initialState(), { type, payload } = {}) => {
            switch (type) {
            case 'ACTION':
                return { ...state, value: payload };
            default:
                return state;
            }
        };
        const { result } = renderHook(() => useCustomReducer(reducer, initialState()));
        const dispatch = result.current[1];
        act(() => dispatch(action(2)));
        expect(action).toBeCalled();
        expect(result.current[0].value).toBe(2);
    });
});
