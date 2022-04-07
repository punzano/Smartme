import '@babel/polyfill';
import React from 'react';
import { render, cleanup, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Ranking from '../Ranking';
import sectorRankingMock from './mocks/sectorRanking';

afterEach(cleanup);

describe('Ranking component', () => {
    test('Ranking snapshot', async () => {
        render(
            <Ranking sectorRanking={sectorRankingMock}/>
        );
        const ranking = screen.getByTestId('ranking');
        
        expect(ranking).toMatchSnapshot();
    });

    test('If no prop is passed to Ranking component, no table should be rendered', async () => {
        render(
            <Ranking/>
        );
        const mpixTable = screen.queryByTestId('mpix-table');
        
        expect(mpixTable).not.toBeInTheDocument();
    });

    test('If props are passed to Ranking component, no table should be rendered', async () => {
        render(
            <Ranking sectorRanking={sectorRankingMock}/>
        );
        const mpixTable = screen.queryByTestId('mpix-table');
        
        expect(mpixTable).toBeInTheDocument();
    });
});
