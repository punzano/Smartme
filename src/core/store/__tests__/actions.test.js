import '@babel/polyfill';
import actions, { ACTION_TYPES } from '../actions';
import { getSectors, getRanking } from '../../services/sectors';

beforeEach(() => {
    jest.clearAllMocks();
});

jest.mock('../../services/sectors');

const assert = (obj) => expect(obj.actual).toEqual(obj.expected);

describe('Actions tests', () => {
    test('Action setSector', () => {
        const action = actions.setSector('16');
        assert({
            actual: action.type,
            expected: ACTION_TYPES.setSector,
        });
        assert({
            actual: action.payload,
            expected: '16',
        });
    });

    test('Action saveSectors', async () => {
        const dispatchMock = jest.fn();
        getSectors.mockImplementation(() => Promise.resolve());
        await actions.saveSectors()(dispatchMock);
        expect(getSectors).toHaveBeenCalled();
        expect(dispatchMock).toHaveBeenCalledTimes(1);
    });

    test('Action saveRanking', async () => {
        const dispatchMock = jest.fn();
        getRanking.mockImplementation((idSector) => Promise.resolve(idSector));
        await actions.saveRanking('18')(dispatchMock);
        expect(getRanking).toHaveBeenCalled();
        expect(dispatchMock).toHaveBeenCalledTimes(1);
    });
});
