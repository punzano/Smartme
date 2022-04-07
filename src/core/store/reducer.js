import { ACTION_TYPES } from './actions';
import initialState from './init';

const reducer = (state, action = { type: '' }) => {
    switch (action.type) {
    case ACTION_TYPES.setSectors:
        return {
            ...state,
            sectors: action.payload
        };
    case ACTION_TYPES.setSector:
        return {
            ...state,
            sectorSelected: action.payload
        };
    case ACTION_TYPES.setRanking:
        return {
            ...state,
            sectorRanking: action.payload
        };
    case ACTION_TYPES.resetState:
        return { ...initialState() };
    default:
        return state;
    }
};

export default reducer;
