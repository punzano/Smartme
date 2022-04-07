import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import AppContext from '../../infra/context/appContext';

import Header from '../../ui/components/Header';
import SubHeader from '../../ui/components/SubHeader';
import Ranking from '../../ui/components/Ranking';

import actions from '../../core/store/actions';

import '../../assets/less/main.less';

const MPIx = () => {
	const { state, dispatch } = React.useContext(AppContext);
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		dispatch(actions.saveSectors());
		dispatch(actions.saveRanking(state.sectorSelected));
	}, []);

	useEffect(() => {
		const idSector = searchParams.get('idSector');
		dispatch(actions.saveRanking(idSector));
	}, [searchParams]);

	const onChangeSector = (e) => {
		const idSector = e.target.value;
		dispatch(actions.setSector(idSector));
		setSearchParams({ idSector });
	};

	return (
		<div className="App">
			<Grid container>
				<Header/>
				<SubHeader sectors={state.sectors} onChangeSector={onChangeSector} sectorSelected={state.sectorSelected}/>
				<Ranking sectorRanking={state.sectorRanking}/>
			</Grid>
		</div>
	);
}

export default MPIx;
