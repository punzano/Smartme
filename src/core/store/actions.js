import { getSectors, getRanking } from '../services/sectors';

export const ACTION_TYPES = {
    setSector: 'SECTORS::SET_SECTOR',
    setSectors: 'SECTORS::SET_SECTORS',
    setRanking: 'SECTORS::SET_RANKING',
};

const setSectors = (sectors = []) => ({
    type: ACTION_TYPES.setSectors,
    payload: sectors
});

const setSector = (sector = '') => ({
    type: ACTION_TYPES.setSector,
    payload: sector
});

const setRanking = (ranking = []) => ({
    type: ACTION_TYPES.setRanking,
    payload: ranking
});

const saveSectors = () => (dispatch) => {
    getSectors()
        .then(sectors => {
            dispatch(setSectors(sectors));
        });
};

const saveRanking = (idSector) => (dispatch) => {
    getRanking(idSector)
        .then(ranking => {
            dispatch(setRanking(ranking));
        });
};

const actions ={
    saveSectors,
    setSector,
    saveRanking,
};

export default actions;
