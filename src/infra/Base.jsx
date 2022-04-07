import React from 'react';
import AppContext from './context/appContext';
import useCustomReducer from './hooks/useCustomReducer';
import reducer from '../core/store/reducer';
import initialState from '../core/store/init';
import App from '../App';

const Base = () => {
    const [state, dispatch] = useCustomReducer(reducer, initialState());

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <App/>
        </AppContext.Provider>
    );
};

export default Base;
