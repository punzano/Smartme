import React from 'react';

const useCustomReducer = (reducer, initialState) => {
    const [state, dispatchD] = React.useReducer(reducer, initialState);

    const customDispatch = action => {
        if (typeof action === 'function') {
            return Promise.resolve(action(dispatchD));
        }

        return Promise.resolve(dispatchD(action));
    };

    return [state, customDispatch];
};

export default useCustomReducer;
