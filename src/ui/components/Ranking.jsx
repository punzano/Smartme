import React from 'react';

import { Grid } from '@mui/material';

import MPIxTable from './MPIxTable';

const Ranking = ({ sectorRanking = {} }) => {
	console.log('sectorRanking', sectorRanking);
	const { mpix } = sectorRanking;

	const shouldRenderTable = mpix => mpix && mpix.length > 0;

	return (
		<Grid container item direction="column" justifyContent="space-between" alignItems="center" className="ranking" data-testid="ranking">
			{/* Aquí irían la fecha, el link al ranking completo y el número de apps mostradas */}
			{shouldRenderTable(mpix)
                && <MPIxTable mpix={mpix} />
			}
		</Grid>
	);
}

export default Ranking;
