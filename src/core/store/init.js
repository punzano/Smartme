const initialState = ({
    sectorSelected = '18',
    sectors = [],
    sectorRanking = {},
} = {}) => ({
    sectorSelected,
    sectors,
    sectorRanking
});

export default initialState;
