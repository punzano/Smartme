import actions, { ACTION_TYPES } from '../actions';
import reducer from '../reducer';
import initial from '../init';

beforeEach(() => {
    jest.clearAllMocks();
});

const initialState = initial();

const assert = (obj) => expect(obj.actual).toEqual(obj.expected);

describe('Step one profile Store reducer tests', () => {
    test('Given an initialState and no action, the reducer must return the same state', () => {
        const actual = reducer(initialState);
        assert({ actual, expected: initialState });
    });

    test('Given a setSector action, the reducer must return changed state', () => {
        const actual = reducer(initialState, actions.setSector('22'));
        assert({
            actual,
            expected: {
                ...initialState,
                sectorSelected: '22',
            },
        });
    });

    test('Given a setSectors action, the reducer must return changed state', () => {
        const actual = reducer(initialState, {
            type: ACTION_TYPES.setSectors,
            payload: [1, 2, 3]
        });
        assert({
            actual,
            expected: {
                ...initialState,
                sectors: [1, 2, 3],
            },
        });
    });

    test('Given a setRanking action, the reducer must return changed state', () => {
        const actual = reducer(initialState, {
            type: ACTION_TYPES.setRanking,
            payload: { prueba1: 1, prueba2: 2 }
        });
        assert({
            actual,
            expected: {
                ...initialState,
                sectorRanking: { prueba1: 1, prueba2: 2 }
            },
        });
    });
});
