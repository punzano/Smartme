import initialState from '../init';

describe('initialState tests', () => {
    test('If initialState factory is called with no params, it must return an initial valid object', () => {
        expect(initialState()).toEqual({
            sectorSelected: '18',
            sectors: [],
            sectorRanking: {},
        });
    });

    test('if initialState factory is called with params, it must return an initial object properly', () => {
        expect(initialState({
            sectorSelected: '22',
            sectors: [1, 2, 3, 4],
            sectorRanking: { prueba1: 1, prueba2: 2, prueba3: 3, prueba4: 4 },
        })).toEqual({
            sectorSelected: '22',
            sectors: [1, 2, 3, 4],
            sectorRanking: { prueba1: 1, prueba2: 2, prueba3: 3, prueba4: 4 },
        });
    });
});
